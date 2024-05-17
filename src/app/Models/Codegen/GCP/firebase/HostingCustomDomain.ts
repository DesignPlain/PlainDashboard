import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebase_HostingCustomDomainCert,
  Firebase_HostingCustomDomainCert_GetTypes,
} from "../types/Firebase_HostingCustomDomainCert";
import {
  Firebase_HostingCustomDomainIssue,
  Firebase_HostingCustomDomainIssue_GetTypes,
} from "../types/Firebase_HostingCustomDomainIssue";
import {
  Firebase_HostingCustomDomainRequiredDnsUpdate,
  Firebase_HostingCustomDomainRequiredDnsUpdate_GetTypes,
} from "../types/Firebase_HostingCustomDomainRequiredDnsUpdate";

export interface HostingCustomDomainArgs {
  // The ID of the site in which to create this custom domain association.
  SiteId?: string;

  /*
If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'. If false, Terraform will not
wait for DNS records on the 'CustomDomain'. Any issues in the 'CustomDomain' will be returned and stored in the
Terraform state.
*/
  WaitDnsVerification?: boolean;

  /*
A field that lets you specify which SSL certificate type Hosting creates
for your domain name. Spark plan `CustomDomain`s only have access to the
`GROUPED` cert type, while Blaze plan can select any option.
Possible values are: `GROUPED`, `PROJECT_GROUPED`, `DEDICATED`.
*/
  CertPreference?: string;

  /*
The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting.


- - -
*/
  CustomDomain?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A domain name that this CustomDomain should direct traffic towards. If
specified, Hosting will respond to requests against this CustomDomain
with an HTTP 301 code, and route traffic to the specified `redirect_target`
instead.
*/
  RedirectTarget?: string;
}
export class HostingCustomDomain extends Resource {
  // The `CustomDomain`'s create time.
  public CreateTime?: string;

  /*
The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting.


- - -
*/
  public CustomDomain?: string;

  /*
A set of errors Hosting systems encountered when trying to establish
Hosting's ability to serve secure content for your domain name. Resolve
these issues to ensure your `CustomDomain` behaves properly.
Structure is documented below.
*/
  public Issues?: Array<Firebase_HostingCustomDomainIssue>;

  /*
A set of updates you should make to the domain name's DNS records to
let Hosting serve secure content on its behalf.
Structure is documented below.
*/
  public RequiredDnsUpdates?: Array<Firebase_HostingCustomDomainRequiredDnsUpdate>;

  /*
If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'. If false, Terraform will not
wait for DNS records on the 'CustomDomain'. Any issues in the 'CustomDomain' will be returned and stored in the
Terraform state.
*/
  public WaitDnsVerification?: boolean;

  /*
The SSL certificate Hosting has for this `CustomDomain`'s domain name.
For new `CustomDomain`s, this often represents Hosting's intent to create
a certificate, rather than an actual cert. Check the `state` field for
more.
Structure is documented below.
*/
  public Certs?: Array<Firebase_HostingCustomDomainCert>;

  /*
The host state of your domain name. Host state is determined by checking each
IP address associated with your domain name to see if it's serving
Hosting content.
HOST_UNHOSTED:
Your `CustomDomain`'s domain name isn't associated with any IP addresses.
HOST_UNREACHABLE:
Your `CustomDomain`'s domain name can't be reached. Hosting services' DNS
queries to find your domain name's IP addresses resulted in errors. See
your `CustomDomain`'s `issues` field for more details.
HOST_MISMATCH:
Your `CustomDomain`'s domain name has IP addresses that don't ultimately
resolve to Hosting.
HOST_CONFLICT:
Your `CustomDomain`'s domain name has IP addresses that resolve to both
Hosting and other services. To ensure consistent results, remove `A` and
`AAAA` records related to non-Hosting services.
HOST_ACTIVE:
All requests against your `CustomDomain`'s domain name are served by
Hosting. If the `CustomDomain`'s `OwnershipState` is also `ACTIVE`, Hosting
serves your Hosting Site's content on the domain name.
*/
  public HostState?: string;

  /*
if true, indicates that Hosting's systems are attmepting to
make the `CustomDomain`'s state match your preferred state. This is most
frequently `true` when initially provisioning a `CustomDomain` or when creating
a new SSL certificate to match an updated `cert_preference`
*/
  public Reconciling?: boolean;

  /*
A domain name that this CustomDomain should direct traffic towards. If
specified, Hosting will respond to requests against this CustomDomain
with an HTTP 301 code, and route traffic to the specified `redirect_target`
instead.
*/
  public RedirectTarget?: string;

  // The last time the `CustomDomain` was updated.
  public UpdateTime?: string;

  /*
A string that represents the current state of the `CustomDomain` and
allows you to confirm its initial state in requests that would modify it.
*/
  public Etag?: string;

  // The ID of the site in which to create this custom domain association.
  public SiteId?: string;

  /*
A field that lets you specify which SSL certificate type Hosting creates
for your domain name. Spark plan `CustomDomain`s only have access to the
`GROUPED` cert type, while Blaze plan can select any option.
Possible values are: `GROUPED`, `PROJECT_GROUPED`, `DEDICATED`.
*/
  public CertPreference?: string;

  /*
The time the `CustomDomain` was deleted; null for `CustomDomains` that
haven't been deleted. Deleted `CustomDomains` persist for approximately 30
days, after which time Hosting removes them completely.
*/
  public DeleteTime?: string;

  /*
The minimum time before a soft-deleted `CustomDomain` is completely removed
from Hosting; null for `CustomDomains` that haven't been deleted.
*/
  public ExpireTime?: string;

  // The fully-qualified name of the `CustomDomain`.
  public Name?: string;

  /*
The ownership state of your domain name. Ownership is determined at a
Firebase project level, and established by adding `TXT` records to your
domain name's DNS records.
Ownership cascades to subdomains. Granting a project ownership of `foo.com`
also grants that project ownership over `bar.foo.com`, unless you add
specific `TXT` records to `bar.foo.com` that grant a different project
ownership.
If your `CustomDomain` is in an `OwnershipState` other than
`OWNERSHIP_ACTIVE` for more than 30 days and it hasn't been updated in at
least 30 days, Hosting's ownership systems delete the `CustomDomain`.
OWNERSHIP_MISSING:
Your `CustomDomain`'s domain name has no Hosting-related ownership records;
no Firebase project has permission to act on the domain name's behalf.
OWNERSHIP_UNREACHABLE:
Your `CustomDomain`'s domain name can't be reached. Hosting services' DNS
queries to find your domain name's ownership records resulted in errors.
See your `CustomDomain`'s `issues` field for more details.
OWNERSHIP_MISMATCH:
Your `CustomDomain`'s domain name is owned by another Firebase project.
Remove the conflicting `TXT` records and replace them with project-specific
records for your current Firebase project.
OWNERSHIP_CONFLICT:
Your `CustomDomain`'s domain name has conflicting `TXT` records that
indicate ownership by both your current Firebase project and another
project. Remove the other project's ownership records to grant the current
project ownership.
OWNERSHIP_PENDING:
Your `CustomDomain`'s DNS records are configured correctly. Hosting will
transfer ownership of your domain to this `CustomDomain` within 24 hours.
OWNERSHIP_ACTIVE:
Your `CustomDomain`'s domain name has `TXT` records that grant its project
permission to act on its behalf.
*/
  public OwnershipState?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "RedirectTarget",
        "A domain name that this CustomDomain should direct traffic towards. If\nspecified, Hosting will respond to requests against this CustomDomain\nwith an HTTP 301 code, and route traffic to the specified `redirect_target`\ninstead.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SiteId",
        "The ID of the site in which to create this custom domain association.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "WaitDnsVerification",
        "If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'. If false, Terraform will not\nwait for DNS records on the 'CustomDomain'. Any issues in the 'CustomDomain' will be returned and stored in the\nTerraform state.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CertPreference",
        "A field that lets you specify which SSL certificate type Hosting creates\nfor your domain name. Spark plan `CustomDomain`s only have access to the\n`GROUPED` cert type, while Blaze plan can select any option.\nPossible values are: `GROUPED`, `PROJECT_GROUPED`, `DEDICATED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomDomain",
        "The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
