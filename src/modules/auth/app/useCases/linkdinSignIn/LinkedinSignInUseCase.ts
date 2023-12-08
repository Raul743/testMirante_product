import UseCase from '~/base/app/useCases/useCase';


class LinkedinSignInUseCase implements UseCase<void, string> {

  private getCredentials(){
    return {
      clientId: String(process.env.LINKEDIN_CLIENT_ID),
      secret:String(process.env.LINKEDIN_SECRET),
      redirect_uri:String(process.env.LINKEDIN_URI),
      scope:String(process.env.LINKEDIN_SCOPE),
    }
  }
  async execute (): Promise<string> {

    return`https://linkedin.com/oauth/v2/authorization?client_id=77fnj0n7gvw7c0
    &response_type=code&scope=profile&email&redirect_uri=http://localhost:3000/v1/auth/linkedin/redirect`
  }
}

export { LinkedinSignInUseCase };