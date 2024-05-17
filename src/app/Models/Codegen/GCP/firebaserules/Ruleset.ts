import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firebaserules_RulesetSource,
  Firebaserules_RulesetSource_GetTypes,
} from "../types/Firebaserules_RulesetSource";
import {
  Firebaserules_RulesetMetadata,
  Firebaserules_RulesetMetadata_GetTypes,
} from "../types/Firebaserules_RulesetMetadata";

export interface RulesetArgs {
  // The project for the resource
  Project?: string;

  // `Source` for the `Ruleset`.
  Source?: Firebaserules_RulesetSource;
}
export class Ruleset extends Resource {
  // The project for the resource
  public Project?: string;

  // `Source` for the `Ruleset`.
  public Source?: Firebaserules_RulesetSource;

  // Output only. Time the `Ruleset` was created.
  public CreateTime?: string;

  // Output only. The metadata for this ruleset.
  public Metadatas?: Array<Firebaserules_RulesetMetadata>;

  /*
File name.

- - -
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Source",
        "`Source` for the `Ruleset`.",
        Firebaserules_RulesetSource_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
    ];
  }
}
