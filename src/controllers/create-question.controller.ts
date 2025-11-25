import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import type { UserPayload } from 'src/auth/jwt.strategy'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import z from 'zod'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle(
    @Body(new ZodValidationPipe(createQuestionBodySchema)) body: CreateQuestionBodySchema
    @CurrentUser() user: UserPayload,
  ) {
    console.log('🚀 ~ CreateQuestionController ~ handle ~ user:', user)

    return 'ok'
  }
}
