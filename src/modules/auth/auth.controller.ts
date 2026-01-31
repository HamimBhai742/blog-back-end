import { Request, Response } from 'express';
import { createAsyncFn } from '../../utils/create.asyncFn';
import { authServices } from './auth.services';
import { sendResponse } from '../../utils/send.response';
import httpStatusCode from 'http-status-codes';
const userRegister = createAsyncFn(async (req: Request, res: Response) => {
  const data = req.body;

  const user = await authServices.userRegister(data);
  sendResponse(res, {
    statusCode: httpStatusCode.CREATED,
    success: true,
    message: 'User registered successfully',
    data: user,
  });
});

export const authController = {
  userRegister,
};
