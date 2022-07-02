import React, { SVGProps } from 'react';
import { BodyParts } from '../../utils/brute/availableBodyParts';
import { Gender } from '../../utils/brute/types';
import Head from './Head/Head';
import LeftFoot from './LeftFoot';
import LeftHand from './LeftHand';
import LeftShoulder from './LeftShoulder';
import LongHair from './LongHair';
import LowerLeftArm from './LowerLeftArm';
import LowerLeftLeg from './LowerLeftLeg';
import LowerRightArm from './LowerRightArm';
import LowerRightLeg from './LowerRightLeg';
import Pelvis from './Pelvis';
import RightFoot from './RightFoot';
import RightHand from './RightHand';
import RightShoulder from './RightShoulder';
import Torso from './Torso';
import Tummy from './Tummy';
import UpperLeftArm from './UpperLeftArm';
import UpperLeftLeg from './UpperLeftLeg';
import UpperRightArm from './UpperRightArm';
import UpperRightLeg from './UpperRightLeg';

interface BruteProps extends SVGProps<SVGSVGElement> {
  gender: Gender;
  bodyParts: BodyParts;
  inverted?: boolean;
  shadow?: boolean
}

const Brute = ({
  gender,
  bodyParts,
  inverted,
  shadow = true,
  ...rest
}: BruteProps) => {
  return (
    <svg
      style={{
        transform: inverted ? 'scale(-1, 1)' : 'scale(1, 1)',
        WebkitFilter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))',
        filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))',
      }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 97 201"
      {...rest}
    >
      {shadow && (
        <use xmlns="http://www.w3.org/2000/svg" height="80.0" id="_shadow" transform="matrix(1.2543, 0.0, 0.0, 0.5937, -14, 165)" width="80.0" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#shadowSprite" />
      )}
      <g transform="matrix(1, 0, 0, 1, 0, -7)">
        <LongHair gender={gender} type={bodyParts.longHair} />
        <LowerRightArm gender={gender} type={bodyParts.lowerRightArm} />
        <RightHand gender={gender} type={bodyParts.rightHand} />
        <UpperRightArm gender={gender} type={bodyParts.UpperRightArm} />
        <RightShoulder gender={gender} type={bodyParts.rightShoulder} />
        <RightFoot gender={gender} type={bodyParts.rightFoot} />
        <LowerRightLeg gender={gender} type={bodyParts.lowerRightLeg} />
        <UpperRightLeg gender={gender} type={bodyParts.upperRightLeg} />
        <LeftFoot gender={gender} type={bodyParts.leftFoot} />
        <LowerLeftLeg gender={gender} type={bodyParts.lowerLeftLeg} />
        <Pelvis gender={gender} type={bodyParts.pelvis} />
        <UpperLeftLeg gender={gender} type={bodyParts.upperLeftLeg} />
        <Tummy gender={gender} type={bodyParts.tummy} />
        <Torso gender={gender} type={bodyParts.torso} />
        <Head gender={gender} type={bodyParts.head} />
        <LeftHand gender={gender} type={bodyParts.leftHand} />
        <UpperLeftArm gender={gender} type={bodyParts.upperLeftArm} />
        <LowerLeftArm gender={gender} type={bodyParts.lowerLeftArm} />
        <LeftShoulder gender={gender} type={bodyParts.leftShoulder} />
      </g>
      <defs>
        <g id="shadowSprite" transform="matrix(1.0, 0.0, 0.0, 1.0, 40.0, 40.0)">
          <use height="80.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -40.0, -40.0)" width="80.0" xlinkHref="#shadow" />
        </g>
        <g id="shadow" transform="matrix(1.0, 0.0, 0.0, 1.0, 40.0, 40.0)">
          <path d="M28.25 -28.3 Q40.0 -16.55 40.0 0.0 40.0 16.55 28.25 28.25 16.55 40.0 0.0 40.0 -16.55 40.0 -28.3 28.25 -40.0 16.55 -40.0 0.0 -40.0 -16.55 -28.3 -28.3 -16.55 -40.0 0.0 -40.0 16.55 -40.0 28.25 -28.3" fill="url(#shadowGradient)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0475, 0.0, 0.0, 0.0475, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id="shadowGradient" r="819.2" spreadMethod="pad">
          <stop offset="0.4117647058823529" stopColor="#2b0000" stopOpacity="0.047058824" />
          <stop offset="1.0" stopColor="#110000" stopOpacity="0.0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Brute;