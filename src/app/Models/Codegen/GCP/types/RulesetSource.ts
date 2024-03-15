import { RulesetSourceFile } from "./RulesetSourceFile";

export interface RulesetSource {
  // `File` set constituting the `Source` bundle.
  Files?: Array<RulesetSourceFile>;

  // `Language` of the `Source` bundle. If unspecified, the language will default to `FIREBASE_RULES`. Possible values: LANGUAGE_UNSPECIFIED, FIREBASE_RULES, EVENT_FLOW_TRIGGERS
  Language?: string;
}
