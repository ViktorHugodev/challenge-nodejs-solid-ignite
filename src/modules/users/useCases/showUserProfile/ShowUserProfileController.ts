import { Request, Response } from 'express'

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase'

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params
    try {
      const {
        created_at,
        id,
        updated_at,
        name,
        admin,
        email,
      } = this.showUserProfileUseCase.execute({ user_id })
      return response
        .status(200)
        .json({ name, email, created_at, updated_at, id, admin })
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }
}

export { ShowUserProfileController }
