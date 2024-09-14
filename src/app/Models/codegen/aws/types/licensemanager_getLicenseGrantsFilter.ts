import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface licensemanager_getLicenseGrantsFilter {
  /*
Name of the field to filter by, as defined by
[the underlying AWS API](https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedGrants.html#API_ListReceivedGrants_RequestSyntax).
For example, if filtering using `ProductSKU`, use:

<!--Start PulumiCodeChooser -->
```typescript
import - as pulumi from "@pulumi/pulumi";
import - as aws from "@pulumi/aws";

const selected = aws.licensemanager.getLicenseGrants({
    filters: [{
        name: "ProductSKU",
        values: [""],
    }],
});
```
```python
import pulumi
import pulumi_aws as aws

selected = aws.licensemanager.get_license_grants(filters=[{
    "name": "ProductSKU",
    "values": [""],
}])
```
```csharp
using System.Collections.Generic;
using System.Linq;
using Pulumi;
using Aws = Pulumi.Aws;

return await Deployment.RunAsync(() => 
{
    var selected = Aws.LicenseManager.GetLicenseGrants.Invoke(new()
    {
        Filters = new[]
        {
            new Aws.LicenseManager.Inputs.GetLicenseGrantsFilterInputArgs
            {
                Name = "ProductSKU",
                Values = new[]
                {
                    "",
                },
            },
        },
    });

});
```
```go
package main

import (
	"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/licensemanager"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func main() {
	pulumi.Run(func(ctx -pulumi.Context) error {
		_, err := licensemanager.GetLicenseGrants(ctx, &licensemanager.GetLicenseGrantsArgs{
			Filters: []licensemanager.GetLicenseGrantsFilter{
				{
					Name: "ProductSKU",
					Values: []string{
						"",
					},
				},
			},
		}, nil)
		if err != nil {
			return err
		}
		return nil
	})
}
```
```java
package generated_program;

import com.pulumi.Context;
import com.pulumi.Pulumi;
import com.pulumi.core.Output;
import com.pulumi.aws.licensemanager.LicensemanagerFunctions;
import com.pulumi.aws.licensemanager.inputs.GetLicenseGrantsArgs;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

public class App {
    public static void main(String[] args) {
        Pulumi.run(App::stack);
    }

    public static void stack(Context ctx) {
        final var selected = LicensemanagerFunctions.getLicenseGrants(GetLicenseGrantsArgs.builder()
            .filters(GetLicenseGrantsFilterArgs.builder()
                .name("ProductSKU")
                .values("")
                .build())
            .build());

    }
}
```
```yaml
variables:
  selected:
    fn::invoke:
      Function: aws:licensemanager:getLicenseGrants
      Arguments:
        filters:
          - name: ProductSKU
            values:
              -
```
<!--End PulumiCodeChooser -->
*/
  name?: string;

  // Set of values that are accepted for the given field.
  values?: Array<string>;
}

export function licensemanager_getLicenseGrantsFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      'Name of the field to filter by, as defined by\n[the underlying AWS API](https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedGrants.html#API_ListReceivedGrants_RequestSyntax).\nFor example, if filtering using `ProductSKU`, use:\n\n<!--Start PulumiCodeChooser -->\n```typescript\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\nconst selected = aws.licensemanager.getLicenseGrants({\n    filters: [{\n        name: "ProductSKU",\n        values: [""],\n    }],\n});\n```\n```python\nimport pulumi\nimport pulumi_aws as aws\n\nselected = aws.licensemanager.get_license_grants(filters=[{\n    "name": "ProductSKU",\n    "values": [""],\n}])\n```\n```csharp\nusing System.Collections.Generic;\nusing System.Linq;\nusing Pulumi;\nusing Aws = Pulumi.Aws;\n\nreturn await Deployment.RunAsync(() => \n{\n    var selected = Aws.LicenseManager.GetLicenseGrants.Invoke(new()\n    {\n        Filters = new[]\n        {\n            new Aws.LicenseManager.Inputs.GetLicenseGrantsFilterInputArgs\n            {\n                Name = "ProductSKU",\n                Values = new[]\n                {\n                    "",\n                },\n            },\n        },\n    });\n\n});\n```\n```go\npackage main\n\nimport (\n\t"github.com/pulumi/pulumi-aws/sdk/v6/go/aws/licensemanager"\n\t"github.com/pulumi/pulumi/sdk/v3/go/pulumi"\n)\n\nfunc main() {\n\tpulumi.Run(func(ctx *pulumi.Context) error {\n\t\t_, err := licensemanager.GetLicenseGrants(ctx, &licensemanager.GetLicenseGrantsArgs{\n\t\t\tFilters: []licensemanager.GetLicenseGrantsFilter{\n\t\t\t\t{\n\t\t\t\t\tName: "ProductSKU",\n\t\t\t\t\tValues: []string{\n\t\t\t\t\t\t"",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t}, nil)\n\t\tif err != nil {\n\t\t\treturn err\n\t\t}\n\t\treturn nil\n\t})\n}\n```\n```java\npackage generated_program;\n\nimport com.pulumi.Context;\nimport com.pulumi.Pulumi;\nimport com.pulumi.core.Output;\nimport com.pulumi.aws.licensemanager.LicensemanagerFunctions;\nimport com.pulumi.aws.licensemanager.inputs.GetLicenseGrantsArgs;\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.io.File;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class App {\n    public static void main(String[] args) {\n        Pulumi.run(App::stack);\n    }\n\n    public static void stack(Context ctx) {\n        final var selected = LicensemanagerFunctions.getLicenseGrants(GetLicenseGrantsArgs.builder()\n            .filters(GetLicenseGrantsFilterArgs.builder()\n                .name("ProductSKU")\n                .values("")\n                .build())\n            .build());\n\n    }\n}\n```\n```yaml\nvariables:\n  selected:\n    fn::invoke:\n      Function: aws:licensemanager:getLicenseGrants\n      Arguments:\n        filters:\n          - name: ProductSKU\n            values:\n              -\n```\n<!--End PulumiCodeChooser -->',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given field.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
