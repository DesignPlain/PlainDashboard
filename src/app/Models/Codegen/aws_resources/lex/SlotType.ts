import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_SlotTypeEnumerationValue,
  lex_SlotTypeEnumerationValue_GetTypes,
} from "../types/lex_SlotTypeEnumerationValue";

export interface SlotTypeArgs {
  /*
Determines if a new slot type version is created when the initial resource is created and on each
update. Defaults to `false`.
*/
  createVersion?: boolean;

  // A description of the slot type. Must be less than or equal to 200 characters in length.
  description?: string;

  /*
A list of EnumerationValue objects that defines the values that
the slot type can take. Each value can have a list of synonyms, which are additional values that help
train the machine learning model about the values that it resolves for a slot. Attributes are
documented under enumeration_value.
*/
  enumerationValues?: Array<lex_SlotTypeEnumerationValue>;

  // The name of the slot type. The name is not case sensitive. Must be less than or equal to 100 characters in length.
  name?: string;

  /*
Determines the slot resolution strategy that Amazon Lex
uses to return slot type values. `ORIGINAL_VALUE` returns the value entered by the user if the user
value is similar to the slot value. `TOP_RESOLUTION` returns the first value in the resolution list
if there is a resolution list for the slot, otherwise null is returned. Defaults to `ORIGINAL_VALUE`.
*/
  valueSelectionStrategy?: string;
}
export class SlotType extends Resource {
  // The date when the slot type version was created.
  public createdDate?: string;

  // A description of the slot type. Must be less than or equal to 200 characters in length.
  public description?: string;

  /*
Determines if a new slot type version is created when the initial resource is created and on each
update. Defaults to `false`.
*/
  public createVersion?: boolean;

  /*
A list of EnumerationValue objects that defines the values that
the slot type can take. Each value can have a list of synonyms, which are additional values that help
train the machine learning model about the values that it resolves for a slot. Attributes are
documented under enumeration_value.
*/
  public enumerationValues?: Array<lex_SlotTypeEnumerationValue>;

  // The date when the `$LATEST` version of this slot type was updated.
  public lastUpdatedDate?: string;

  // The name of the slot type. The name is not case sensitive. Must be less than or equal to 100 characters in length.
  public name?: string;

  /*
Determines the slot resolution strategy that Amazon Lex
uses to return slot type values. `ORIGINAL_VALUE` returns the value entered by the user if the user
value is similar to the slot value. `TOP_RESOLUTION` returns the first value in the resolution list
if there is a resolution list for the slot, otherwise null is returned. Defaults to `ORIGINAL_VALUE`.
*/
  public valueSelectionStrategy?: string;

  // The version of the slot type.
  public version?: string;

  /*
Checksum identifying the version of the slot type that was created. The checksum is
not included as an argument because the resource will add it automatically when updating the slot type.
*/
  public checksum?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the slot type. Must be less than or equal to 200 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enumerationValues",
        "A list of EnumerationValue objects that defines the values that\nthe slot type can take. Each value can have a list of synonyms, which are additional values that help\ntrain the machine learning model about the values that it resolves for a slot. Attributes are\ndocumented under enumeration_value.",
        lex_SlotTypeEnumerationValue_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the slot type. The name is not case sensitive. Must be less than or equal to 100 characters in length.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "valueSelectionStrategy",
        "Determines the slot resolution strategy that Amazon Lex\nuses to return slot type values. `ORIGINAL_VALUE` returns the value entered by the user if the user\nvalue is similar to the slot value. `TOP_RESOLUTION` returns the first value in the resolution list\nif there is a resolution list for the slot, otherwise null is returned. Defaults to `ORIGINAL_VALUE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "createVersion",
        "Determines if a new slot type version is created when the initial resource is created and on each\nupdate. Defaults to `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
