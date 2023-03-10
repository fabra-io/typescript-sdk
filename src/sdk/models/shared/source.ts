import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Connection } from "./connection";
import { Expose, Type } from "class-transformer";


export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "connection" })
  @Type(() => Connection)
  connection?: Connection;

  @SpeakeasyMetadata()
  @Expose({ name: "display_name" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "end_customer_id" })
  endCustomerId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;
}