import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion {
  /*
A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides.
If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
*/
  ConfigOverrides?: Map<string, string>;

  //
  Key?: string;

  // The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
  Version?: string;
}

export function Dataproc_getMetastoreServiceHiveMetastoreConfigAuxiliaryVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "ConfigOverrides",
      "A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides.\nIf keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "Key", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.",
      [],
      true,
      false,
    ),
  ];
}
