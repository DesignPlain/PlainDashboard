import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecr_getLifecyclePolicyDocumentRuleSelection {
  // Specify a count number. If the `count_type` used is "imageCountMoreThan", then the value is the maximum number of images that you want to retain in your repository. If the `count_type` used is "sinceImagePushed", then the value is the maximum age limit for your images.
  countNumber?: number;

  // Specify a count type to apply to the images. If `count_type` is set to "imageCountMoreThan", you also specify `count_number` to create a rule that sets a limit on the number of images that exist in your repository. If `count_type` is set to "sinceImagePushed", you also specify `count_unit` and `count_number` to specify a time limit on the images that exist in your repository.
  countType?: string;

  // Specify a count unit of days to indicate that as the unit of time, in addition to `count_number`, which is the number of days.
  countUnit?: string;

  // You must specify a comma-separated list of image tag patterns that may contain wildcards (\-) on which to take action with your lifecycle policy. For example, if your images are tagged as `prod`, `prod1`, `prod2`, and so on, you would use the tag pattern list `["prod\-"]` to specify all of them. If you specify multiple tags, only the images with all specified tags are selected. There is a maximum limit of four wildcards (\-) per string. For example, `["-test-1-2-3", "test-1-2-3-"]` is valid but `["test-1-2-3-4-5-6"]` is invalid.
  tagPatternLists?: Array<string>;

  // You must specify a comma-separated list of image tag prefixes on which to take action with your lifecycle policy. For example, if your images are tagged as `prod`, `prod1`, `prod2`, and so on, you would use the tag prefix "prod" to specify all of them. If you specify multiple tags, only images with all specified tags are selected.
  tagPrefixLists?: Array<string>;

  // Determines whether the lifecycle policy rule that you are adding specifies a tag for an image. Acceptable options are "tagged", "untagged", or "any". If you specify "any", then all images have the rule applied to them. If you specify "tagged", then you must also specify a `tag_prefix_list` value. If you specify "untagged", then you must omit `tag_prefix_list`.
  tagStatus?: string;
}

export function ecr_getLifecyclePolicyDocumentRuleSelection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "countType",
      'Specify a count type to apply to the images. If `count_type` is set to "imageCountMoreThan", you also specify `count_number` to create a rule that sets a limit on the number of images that exist in your repository. If `count_type` is set to "sinceImagePushed", you also specify `count_unit` and `count_number` to specify a time limit on the images that exist in your repository.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "countUnit",
      "Specify a count unit of days to indicate that as the unit of time, in addition to `count_number`, which is the number of days.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tagPatternLists",
      'You must specify a comma-separated list of image tag patterns that may contain wildcards (\\*) on which to take action with your lifecycle policy. For example, if your images are tagged as `prod`, `prod1`, `prod2`, and so on, you would use the tag pattern list `["prod\\*"]` to specify all of them. If you specify multiple tags, only the images with all specified tags are selected. There is a maximum limit of four wildcards (\\*) per string. For example, `["*test*1*2*3", "test*1*2*3*"]` is valid but `["test*1*2*3*4*5*6"]` is invalid.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tagPrefixLists",
      'You must specify a comma-separated list of image tag prefixes on which to take action with your lifecycle policy. For example, if your images are tagged as `prod`, `prod1`, `prod2`, and so on, you would use the tag prefix "prod" to specify all of them. If you specify multiple tags, only images with all specified tags are selected.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tagStatus",
      'Determines whether the lifecycle policy rule that you are adding specifies a tag for an image. Acceptable options are "tagged", "untagged", or "any". If you specify "any", then all images have the rule applied to them. If you specify "tagged", then you must also specify a `tag_prefix_list` value. If you specify "untagged", then you must omit `tag_prefix_list`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "countNumber",
      'Specify a count number. If the `count_type` used is "imageCountMoreThan", then the value is the maximum number of images that you want to retain in your repository. If the `count_type` used is "sinceImagePushed", then the value is the maximum age limit for your images.',
      () => [],
      true,
      false,
    ),
  ];
}
