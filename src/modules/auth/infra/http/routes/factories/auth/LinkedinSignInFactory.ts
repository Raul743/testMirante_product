import { LinkedinSignInUseCase } from "~/modules/auth/app/useCases/linkdinSignIn/LinkedinSignInUseCase"
import { LinkedinSignInController } from "../../../controllers/LinkedinSignInController"

const useCase = new LinkedinSignInUseCase()
const controller = new LinkedinSignInController(useCase)

export default controller