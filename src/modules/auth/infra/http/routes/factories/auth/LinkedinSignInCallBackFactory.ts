import { LinkedinSignInCallBackUseCase } from "~/modules/auth/app/useCases/linkdinSignIn/LinkedinSignInCallBackUseCase"
import { LinkedinSignInCallBackController } from "../../../controllers/LinkedinSignInCallBackController"

const useCase = new LinkedinSignInCallBackUseCase()
const controller = new LinkedinSignInCallBackController(useCase)

export default controller