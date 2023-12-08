import UseCase from '~/base/app/useCases/useCase';
import { OAuth2Client } from 'google-auth-library';
import { EntityAlreadyExistError } from '~/shared/errors/entityAlreadyExistError';

export type Input = {
  tokenId: string;
  clientId: string;
};

class GoogleSignInUseCase implements UseCase<Input, void> {
  private getCredentials(){
    return {
      clientId: String(process.env.GOOGLE_CLIENT_ID)
    }
  }
  async execute ({ clientId, tokenId}: Input): Promise<void> {

    const client = new OAuth2Client(clientId);

    const authenticated = await client.verifyIdToken({
      idToken:tokenId,
      audience:[
       this.getCredentials().clientId
      ]
    })

    const payload = authenticated.getPayload()

    if (!payload) {
      throw new EntityAlreadyExistError()
    }

   console.log("logged success", payload)
  }
}

export { GoogleSignInUseCase };