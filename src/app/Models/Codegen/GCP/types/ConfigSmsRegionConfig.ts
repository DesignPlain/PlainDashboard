import { ConfigSmsRegionConfigAllowByDefault } from "./ConfigSmsRegionConfigAllowByDefault";
import { ConfigSmsRegionConfigAllowlistOnly } from "./ConfigSmsRegionConfigAllowlistOnly";

export interface ConfigSmsRegionConfig {
  /*
A policy of only allowing regions by explicitly adding them to an allowlist.
Structure is documented below.
*/
  AllowlistOnly?: ConfigSmsRegionConfigAllowlistOnly;

  /*
A policy of allowing SMS to every region by default and adding disallowed regions to a disallow list.
Structure is documented below.
*/
  AllowByDefault?: ConfigSmsRegionConfigAllowByDefault;
}
