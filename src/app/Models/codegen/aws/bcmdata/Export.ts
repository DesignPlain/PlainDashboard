import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bcmdata_ExportExport,
  bcmdata_ExportExport_GetTypes,
} from "../types/bcmdata_ExportExport";
import {
  bcmdata_ExportTimeouts,
  bcmdata_ExportTimeouts_GetTypes,
} from "../types/bcmdata_ExportTimeouts";

export interface ExportArgs {
  // The details of the export, including data query, name, description, and destination configuration.  See the `export` argument reference below.
  export?: bcmdata_ExportExport;

  //
  tags?: Map<string, string>;

  //
  timeouts?: bcmdata_ExportTimeouts;
}
export class Export extends DS_Resource {
  // The details of the export, including data query, name, description, and destination configuration.  See the `export` argument reference below.
  public export?: bcmdata_ExportExport;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: bcmdata_ExportTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "export",
        "The details of the export, including data query, name, description, and destination configuration.  See the `export` argument reference below.",
        () => bcmdata_ExportExport_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => bcmdata_ExportTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
