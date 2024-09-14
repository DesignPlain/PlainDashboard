import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecr_RegistryScanningConfigurationRule,
  ecr_RegistryScanningConfigurationRule_GetTypes,
} from "../types/ecr_RegistryScanningConfigurationRule";

export interface RegistryScanningConfigurationArgs {
  // One or multiple blocks specifying scanning rules to determine which repository filters are used and at what frequency scanning will occur. See below for schema.
  rules?: Array<ecr_RegistryScanningConfigurationRule>;

  // the scanning type to set for the registry. Can be either `ENHANCED` or `BASIC`.
  scanType?: string;
}
export class RegistryScanningConfiguration extends DS_Resource {
  // One or multiple blocks specifying scanning rules to determine which repository filters are used and at what frequency scanning will occur. See below for schema.
  public rules?: Array<ecr_RegistryScanningConfigurationRule>;

  // the scanning type to set for the registry. Can be either `ENHANCED` or `BASIC`.
  public scanType?: string;

  // The registry ID the scanning configuration applies to.
  public registryId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "One or multiple blocks specifying scanning rules to determine which repository filters are used and at what frequency scanning will occur. See below for schema.",
        () => ecr_RegistryScanningConfigurationRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "scanType",
        "the scanning type to set for the registry. Can be either `ENHANCED` or `BASIC`.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
