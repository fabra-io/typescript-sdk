import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FieldTypeEnum } from "./fieldtypeenum";
import { Expose } from "class-transformer";


export class Field extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: FieldTypeEnum;
}