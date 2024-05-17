import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec,
  Datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec_GetTypes,
} from "./Datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec";

export interface Datacatalog_EntryGcsFilesetSpec {
  /*
Patterns to identify a set of files in Google Cloud Storage.
See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:
- gs://bucket_name/dir/-: matches all files within bucket_name/dir directory.
- gs://bucket_name/dir/--: matches all files in bucket_name/dir spanning all subdirectories.
- gs://bucket_name/file-: matches files prefixed by file in bucket_name
- gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
- gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
- gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
- gs://bucket_name/a/-/b: matches all files in bucket_name that match a/-/b pattern, such as a/c/b, a/d/b
- gs://another_bucket/a.txt: matches gs://another_bucket/a.txt
*/
  FilePatterns?: Array<string>;

  /*
(Output)
Sample files contained in this fileset, not all files contained in this fileset are represented here.
Structure is documented below.


<a name="nested_sample_gcs_file_specs"></a>The `sample_gcs_file_specs` block contains:
*/
  SampleGcsFileSpecs?: Array<Datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec>;
}

export function Datacatalog_EntryGcsFilesetSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "FilePatterns",
      "Patterns to identify a set of files in Google Cloud Storage.\nSee [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)\nfor more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:\n* gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.\n* gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.\n* gs://bucket_name/file*: matches files prefixed by file in bucket_name\n* gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name\n* gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name\n* gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name\n* gs://bucket_name/a/*/b: matches all files in bucket_name that match a/*/b pattern, such as a/c/b, a/d/b\n* gs://another_bucket/a.txt: matches gs://another_bucket/a.txt",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SampleGcsFileSpecs",
      '(Output)\nSample files contained in this fileset, not all files contained in this fileset are represented here.\nStructure is documented below.\n\n\n<a name="nested_sample_gcs_file_specs"></a>The `sample_gcs_file_specs` block contains:',
      Datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
