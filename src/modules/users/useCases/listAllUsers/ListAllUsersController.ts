import { Request, Response } from 'express'

import { ListAllUsersUseCase } from './ListAllUsersUseCase'

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  // eslint-disable-next-line consistent-return
  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params

      const users = this.listAllUsersUseCase.execute({ user_id })

      return response.status(200).json({ users })
    } catch (err) {
      return response.status(400).json({ error: err })
    }
  }
}

export { ListAllUsersController }
