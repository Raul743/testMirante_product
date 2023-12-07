import UseCase from '~/base/app/useCases/useCase';
import axios from 'axios';
import { EntityAlreadyExistError } from '~/shared/errors/entityAlreadyExistError';

export type Input = {
 token: string
};

class LinkedinSignInUseCase implements UseCase<Input, void> {
  async execute ({ token }: Input): Promise<void> {
    const response = await axios.get(`https://api.linkedin.com/v2/userinfo`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });

    if(response.status !== 200){
      throw new EntityAlreadyExistError()
    }
  }
}

export { LinkedinSignInUseCase };