import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowMetadataCatalogConfigGlueDataCatalog,
  appflow_FlowMetadataCatalogConfigGlueDataCatalog_GetTypes,
} from "./appflow_FlowMetadataCatalogConfigGlueDataCatalog";

export interface appflow_FlowMetadataCatalogConfig {
  //
  glueDataCatalog?: appflow_FlowMetadataCatalogConfigGlueDataCatalog;
}

export function appflow_FlowMetadataCatalogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "glueDataCatalog",
      "",
      () => appflow_FlowMetadataCatalogConfigGlueDataCatalog_GetTypes(),
      false,
      false,
    ),
  ];
}
