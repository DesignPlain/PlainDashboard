export interface MangedSslCertificateManaged {
  /*
Domains for which a managed SSL certificate will be valid.  Currently,
there can be up to 100 domains in this list.
*/
  Domains?: Array<string>;
}
