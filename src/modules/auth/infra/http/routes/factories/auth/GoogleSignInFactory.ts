import { GoogleSignInUseCase } from "~/modules/auth/app/useCases/googleSignIn/GoogleSignInUseCase"
import { GoogleSignInController } from "../../../controllers/GoogleSignInController"

const useCase = new GoogleSignInUseCase()
const controller = new GoogleSignInController(useCase)

export default controller