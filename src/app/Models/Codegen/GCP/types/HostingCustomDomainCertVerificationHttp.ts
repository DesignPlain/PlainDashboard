export interface HostingCustomDomainCertVerificationHttp {
  // A text string to serve at the path.
  Desired?: string;

  /*
Whether Hosting was able to find the required file contents on the
specified path during its last check.
*/
  Discovered?: string;

  /*
(Output)
The last time Hosting systems checked for the file contents.
*/
  LastCheckTime?: string;

  // The path to the file.
  Path?: string;
}
