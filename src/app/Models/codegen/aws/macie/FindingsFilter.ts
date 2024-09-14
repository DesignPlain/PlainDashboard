import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  macie_FindingsFilterFindingCriteria,
  macie_FindingsFilterFindingCriteria_GetTypes,
} from "../types/macie_FindingsFilterFindingCriteria";

export interface FindingsFilterArgs {
  // The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
  position?: number;

  // A map of key-value pairs that specifies the tags to associate with the filter.
  tags?: Map<string, string>;

  // The action to perform on findings that meet the filter criteria (`finding_criteria`). Valid values are: `ARCHIVE`, suppress (automatically archive) the findings; and, `NOOP`, don't perform any action on the findings.
  action?: string;

  // A custom description of the filter. The description can contain as many as 512 characters.
  description?: string;

  // The criteria to use to filter findings.
  findingCriteria?: macie_FindingsFilterFindingCriteria;

  // A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;
}
export class FindingsFilter extends DS_Resource {
  //
  public tagsAll?: Map<string, string>;

  // The action to perform on findings that meet the filter criteria (`finding_criteria`). Valid values are: `ARCHIVE`, suppress (automatically archive) the findings; and, `NOOP`, don't perform any action on the findings.
  public action?: string;

  // The Amazon Resource Name (ARN) of the Findings Filter.
  public arn?: string;

  // A custom description of the filter. The description can contain as many as 512 characters.
  public description?: string;

  // The criteria to use to filter findings.
  public findingCriteria?: macie_FindingsFilterFindingCriteria;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A map of key-value pairs that specifies the tags to associate with the filter.
  public tags?: Map<string, string>;

  // A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
  public position?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "findingCriteria",
        "The criteria to use to filter findings.",
        () => macie_FindingsFilterFindingCriteria_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "position",
        "The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of key-value pairs that specifies the tags to associate with the filter.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        "The action to perform on findings that meet the filter criteria (`finding_criteria`). Valid values are: `ARCHIVE`, suppress (automatically archive) the findings; and, `NOOP`, don't perform any action on the findings.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A custom description of the filter. The description can contain as many as 512 characters.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
