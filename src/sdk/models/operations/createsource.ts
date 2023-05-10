/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Successfully created source
 */
export class CreateSource200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => shared.Source)
  source?: shared.Source;
}

export class CreateSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successfully created source
   */
  @SpeakeasyMetadata()
  createSource200ApplicationJSONObject?: CreateSource200ApplicationJSON;
}
