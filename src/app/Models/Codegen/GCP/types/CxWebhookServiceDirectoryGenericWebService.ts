export interface CxWebhookServiceDirectoryGenericWebService {
  // Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.
  AllowedCaCerts?: Array<string>;

  // The HTTP request headers to send together with webhook requests.
  RequestHeaders?: Map<string, string>;

  // Whether to use speech adaptation for speech recognition.
  Uri?: string;
}
