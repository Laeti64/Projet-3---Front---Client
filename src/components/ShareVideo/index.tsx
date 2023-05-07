/* eslint-disable @typescript-eslint/no-non-null-assertion */

"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

interface IProps {
  id: string;
}

export default function ShareVideo({ id }: IProps) {
  return (
    <>
      <FacebookShareButton
        url={`${process.env.NEXT_PUBLIC_PROD_URL}/videos/${id}`}
        quote="Check this out! ;-)"
        hashtag="#video"
      >
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <WhatsappShareButton
        url={`${process.env.NEXT_PUBLIC_PROD_URL}/videos/${id}`}
        title="Check this out ;-)"
      >
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>
      <EmailShareButton
        url={`${process.env.NEXT_PUBLIC_PROD_URL}/videos/${id}`}
        subject="Check this out! :-)"
        body="Une vidéo qui pourrait te plaire..."
        separator="           "
      >
        <EmailIcon size={40} round />
      </EmailShareButton>
    </>
  );
}
