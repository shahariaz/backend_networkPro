

import HTTP_STATUS from 'http-status-codes'
export interface IErrorResponse {
    message: string;
    statusCode: number;
    status: string;
    serializeErrors():IError;
}

export interface IError{
    message:string;
    statusCode:number;
    status:string;
}

export abstract class CustomError extends Error{
    abstract statusCode:number;
    abstract status:string;
    constructor(message:string){
        super(message);
     
    }
  serializeErrors():IError{
        return {
            message:this.message,
            status:this.status,
            statusCode:this.statusCode
        }
    }

} 
export class BadRequestError extends CustomError{
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = 'error';
    constructor(message:string){
        super(message);
        Object.setPrototypeOf(this,BadRequestError.prototype);
    }
}
export class NotFoundError extends CustomError{
    statusCode = HTTP_STATUS.NOT_FOUND;
    status = 'error';
    constructor(message:string){
        super(message);
        Object.setPrototypeOf(this,NotFoundError.prototype);
    }
}
export class UnAuthorizedError extends CustomError{
    statusCode = HTTP_STATUS.UNAUTHORIZED;
    status = 'error';
    constructor(message:string){
        super(message);
        Object.setPrototypeOf(this,UnAuthorizedError.prototype);
    }
}
export class InternalServerError extends CustomError{
    statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
    status = 'error';
    constructor(message:string){
        super(message);
        Object.setPrototypeOf(this,InternalServerError.prototype);
    }
}
export class ForbiddenError extends CustomError{
    statusCode = HTTP_STATUS.FORBIDDEN;
    status = 'error';
    constructor(message:string){
        super(message);
        Object.setPrototypeOf(this,ForbiddenError.prototype);
    }
}

export class FileTooLargeError extends CustomError{
    statusCode = HTTP_STATUS.SERVICE_UNAVAILABLE;
    status = 'error';
    constructor(message:string){
        super(message );
    }
}
export class JoiRequestValidationError extends CustomError{
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = 'error';
    constructor(message:string){
        super(message);
    }
}