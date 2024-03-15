import { GuestPoliciesPackageRepositoryApt } from "./GuestPoliciesPackageRepositoryApt";
import { GuestPoliciesPackageRepositoryGoo } from "./GuestPoliciesPackageRepositoryGoo";
import { GuestPoliciesPackageRepositoryYum } from "./GuestPoliciesPackageRepositoryYum";
import { GuestPoliciesPackageRepositoryZypper } from "./GuestPoliciesPackageRepositoryZypper";

export interface GuestPoliciesPackageRepository {
  /*
An Apt Repository.
Structure is documented below.
*/
  Apt?: GuestPoliciesPackageRepositoryApt;

  /*
A Goo Repository.
Structure is documented below.
*/
  Goo?: GuestPoliciesPackageRepositoryGoo;

  /*
A Yum Repository.
Structure is documented below.
*/
  Yum?: GuestPoliciesPackageRepositoryYum;

  /*
A Zypper Repository.
Structure is documented below.
*/
  Zypper?: GuestPoliciesPackageRepositoryZypper;
}
