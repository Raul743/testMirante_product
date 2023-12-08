import UseCase from '~/base/app/useCases/useCase';
import axios from 'axios'

class LinkedinSignInCallBackUseCase implements UseCase<string, string> {

  private getCredentials(){
    return {
      client_id: String(process.env.LINKEDIN_CLIENT_ID),
      client_secret:String(process.env.LINKEDIN_SECRET),
      redirect_uri:String(process.env.LINKEDIN_URI),
      grant_type:String(process.env.LINKEDIN_GRANT_TYPE),
    }
  }
  async execute (code: string): Promise<any> {

    const payload = {
      ...this.getCredentials(),
      code:code
    }

    const { data } = await axios({
       url:`https://linkedin.com/oauth/v2/accessToken`,
       method:'POST',
       headers:{
        'Content-Type': 'x-www-form-urlencoded'
       },
       params:{
        ...payload
       }
      }).then((response) => response)

      return data

  }
}

export { LinkedinSignInCallBackUseCase };