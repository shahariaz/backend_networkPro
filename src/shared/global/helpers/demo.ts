// export class ConflictError extends CustomError{
//     statusCode = HTTP_STATUS.CONFLICT;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,ConflictError.prototype);
//     }
// }
// export class NotAcceptableError extends CustomError{
//     statusCode = HTTP_STATUS.NOT_ACCEPTABLE;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NotAcceptableError.prototype);
//     }
// }
// export class UnprocessableEntityError extends CustomError{
//     statusCode = HTTP_STATUS.UNPROCESSABLE_ENTITY;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,UnprocessableEntityError.prototype);
//     }
// }
// export class TooManyRequestsError extends CustomError{
//     statusCode = HTTP_STATUS.TOO_MANY_REQUESTS;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,TooManyRequestsError.prototype);
//     }
// }
// export class GoneError extends CustomError{
//     statusCode = HTTP_STATUS.GONE;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,GoneError.prototype);
//     }
// }
// export class PayloadTooLargeError extends CustomError{
//     statusCode = HTTP_STATUS.PAYLOAD_TOO_LARGE;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,PayloadTooLargeError.prototype);
//     }
// }
// export class UnsupportedMediaTypeError extends CustomError{
//     statusCode = HTTP_STATUS.UNSUPPORTED_MEDIA_TYPE;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,UnsupportedMediaTypeError.prototype);
//     }
// }
// export class ImATeapotError extends CustomError{
//     statusCode = HTTP_STATUS.IM_A_TEAPOT;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,ImATeapotError.prototype);
//     }
// }
// export class MisdirectedRequestError extends CustomError{
//     statusCode = HTTP_STATUS.MISDIRECTED_REQUEST;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,MisdirectedRequestError.prototype);
//     }
// }
// export class UnavailableForLegalReasonsError extends CustomError{
//     statusCode = HTTP_STATUS.UNAVAILABLE_FOR_LEGAL_REASONS;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,UnavailableForLegalReasonsError.prototype);
//     }
// }
// export class UnrecoverableError extends CustomError{
//     statusCode = HTTP_STATUS.UNRECOVERABLE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,UnrecoverableError.prototype);
//     }
// }
// export class InternalServerError extends CustomError{
//     statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,InternalServerError.prototype);
//     }
// }
// export class NotImplemented extends CustomError{
//     statusCode = HTTP_STATUS.NOT_IMPLEMENTED;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NotImplemented.prototype);
//     }
// }
// export class BadGateway extends CustomError{
//     statusCode = HTTP_STATUS.BAD_GATEWAY;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,BadGateway.prototype);
//     }
// }
// export class ServiceUnavailable extends CustomError{
//     statusCode = HTTP_STATUS.SERVICE_UNAVAILABLE;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,ServiceUnavailable.prototype);
//     }
// }
// export class GatewayTimeout extends CustomError{
//     statusCode = HTTP_STATUS.GATEWAY_TIMEOUT;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,GatewayTimeout.prototype);
//     }
// }
// export class HTTPVersionNotSupported extends CustomError{
//     statusCode = HTTP_STATUS.HTTP_VERSION_NOT_SUPPORTED;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,HTTPVersionNotSupported.prototype);
//     }
// }
// export class VariantAlsoNegotiates extends CustomError{
//     statusCode = HTTP_STATUS.VARIANT_ALSO_NEGOTIATES;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,VariantAlsoNegotiates.prototype);
//     }
// }
// export class InsufficientStorage extends CustomError{
//     statusCode = HTTP_STATUS.INSUFFICIENT_STORAGE;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,InsufficientStorage.prototype);
//     }
// }
// export class LoopDetected extends CustomError{
//     statusCode = HTTP_STATUS.LOOP_DETECTED;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,LoopDetected.prototype);
//     }
// }
// export class NotExtended extends CustomError{
//     statusCode = HTTP_STATUS.NOT_EXTENDED;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NotExtended.prototype);
//     }
// }
// export class NetworkAuthenticationRequired extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_AUTHENTICATION_REQUIRED;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkAuthenticationRequired.prototype);
//     }
// }
// export class NetworkConnectTimeoutError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_CONNECT_TIMEOUT_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkConnectTimeoutError.prototype);
//     }
// }
// export class NetworkReadTimeoutError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_READ_TIMEOUT_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkReadTimeoutError.prototype);
//     }
// }
// export class NetworkWriteTimeoutError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_WRITE_TIMEOUT_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkWriteTimeoutError.prototype);
//     }
// }
// export class NetworkUnknownError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_UNKNOWN_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkUnknownError.prototype);
//     }
// }
// export class NetworkClosedError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_CLOSED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkClosedError.prototype);
//     }
// }
// export class NetworkParseError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_PARSE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkParseError.prototype);
//     }
// }
// export class NetworkValidationError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_VALIDATION_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkValidationError.prototype);
//     }
// }
// export class NetworkUnknownTokenError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_UNKNOWN_TOKEN_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkUnknownTokenError.prototype);
//     }
// }
// export class NetworkProtocolError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_PROTOCOL_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkProtocolError.prototype);
//     }
// }
// export class NetworkInvalidMessageDataError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_INVALID_MESSAGE_DATA_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkInvalidMessageDataError.prototype);
//     }
// }
// export class NetworkMessageTooBigError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_MESSAGE_TOO_BIG_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkMessageTooBigError.prototype);
//     }
// }
// export class NetworkInvalidFramePayloadDataError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_INVALID_FRAME_PAYLOAD_DATA_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkInvalidFramePayloadDataError.prototype);
//     }
// }
// export class NetworkPolicyViolationError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_POLICY_VIOLATION_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkPolicyViolationError.prototype);
//     }
// }
// export class NetworkMessageRejectedError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_MESSAGE_REJECTED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkMessageRejectedError.prototype);
//     }
// }
// export class NetworkCloseCodeError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_CLOSE_CODE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkCloseCodeError.prototype);
//     }
// }
// export class NetworkExtensionNotSupportedError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_EXTENSION_NOT_SUPPORTED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkExtensionNotSupportedError.prototype);
//     }
// }
// export class NetworkUnexpectedConditionError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_UNEXPECTED_CONDITION_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkUnexpectedConditionError.prototype);
//     }
// }
// export class NetworkTlsHandshakeError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_TLS_HANDSHAKE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkTlsHandshakeError.prototype);
//     }
// }
// export class NetworkBadMessageError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_BAD_MESSAGE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkBadMessageError.prototype);
//     }
// }
// export class NetworkMissingExtensionError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_MISSING_EXTENSION_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkMissingExtensionError.prototype);
//     }
// }
// export class NetworkInternalError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_INTERNAL_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkInternalError.prototype);
//     }
// }
// export class NetworkServiceRestartError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_SERVICE_RESTART_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkServiceRestartError.prototype);
//     }
// }
// export class NetworkTryAgainLaterError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_TRY_AGAIN_LATER_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkTryAgainLaterError.prototype);
//     }
// }
// export class NetworkBadGatewayError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_BAD_GATEWAY_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkBadGatewayError.prototype);
//     }
// }
// export class NetworkTlsValidationError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_TLS_VALIDATION_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkTlsValidationError.prototype);
//     }
// }
// export class NetworkUnknownError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_UNKNOWN_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkUnknownError.prototype);
//     }
// }
// export class NetworkSessionRestartError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_SESSION_RESTART_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkSessionRestartError.prototype);
//     }
// }
// export class NetworkServiceUnavailableError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_SERVICE_UNAVAILABLE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkServiceUnavailableError.prototype);
//     }
// }
// export class NetworkDataNotSavedError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_DATA_NOT_SAVED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkDataNotSavedError.prototype);
//     }
// }
// export class NetworkCannotAcceptError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_CANNOT_ACCEPT_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkCannotAcceptError.prototype);
//     }
// }
// export class NetworkTooManyRedirectsError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_TOO_MANY_REDIRECTS_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkTooManyRedirectsError.prototype);
//     }
// }
// export class NetworkBlockedByClientError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_BLOCKED_BY_CLIENT_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkBlockedByClientError.prototype);
//     }
// }
// export class NetworkBlockedByResponseError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_BLOCKED_BY_RESPONSE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkBlockedByResponseError.prototype);
//     }
// }
// export class NetworkDisconnectedError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_DISCONNECTED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkDisconnectedError.prototype);
//     }
// }
// export class NetworkClientClosedRequestError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_CLIENT_CLOSED_REQUEST_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkClientClosedRequestError.prototype);
//     }
// }
// export class NetworkLoginRequiredError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_LOGIN_REQUIRED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkLoginRequiredError.prototype);
//     }
// }
// export class NetworkStreamFailedError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_STREAM_FAILED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkStreamFailedError.prototype);
//     }
// }
// export class NetworkStreamClosedError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_STREAM_CLOSED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkStreamClosedError.prototype);
//     }
// }
// export class NetworkInvalidTlsCertificateError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_INVALID_TLS_CERTIFICATE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkInvalidTlsCertificateError.prototype);
//     }
// }
// export class NetworkInvalidTlsCertificateAuthorityError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_INVALID_TLS_CERTIFICATE_AUTHORITY_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkInvalidTlsCertificateAuthorityError.prototype);
//     }
// }
// export class NetworkInvalidTlsClientCertificateError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_INVALID_TLS_CLIENT_CERTIFICATE_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkInvalidTlsClientCertificateError.prototype);
//     }
// }
// export class NetworkInvalidTlsClientCertificateAuthorityError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_INVALID_TLS_CLIENT_CERTIFICATE_AUTHORITY_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkInvalidTlsClientCertificateAuthorityError.prototype);
//     }
// }
// export class NetworkTlsHandshakeCertificateRequiredError extends CustomError{
//     statusCode = HTTP_STATUS.NETWORK_TLS_HANDSHAKE_CERTIFICATE_REQUIRED_ERROR;
//     status = 'error';
//     constructor(message:string){
//         super(message);
//         Object.setPrototypeOf(this,NetworkTlsHandshakeCertificateRequiredError.prototype);
//     }
// }
