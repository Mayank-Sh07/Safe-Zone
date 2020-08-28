import React from "react";

function LoadFlask({ flaskColor, bubbleColor, liquidColor }) {
  return (
    <svg
      className='prefix__lds-flask'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <defs>
        <clipPath id='prefix__b' clipPathUnits='userSpaceOnUse'>
          <path d='M0 50h100v50H0z' />
        </clipPath>
        <pattern
          id='prefix__a'
          patternUnits='userSpaceOnUse'
          x={0}
          y={0}
          width={100}
          height={100}
        >
          <path fill={liquidColor} d='M0 0h100v100H0z' />
          <circle
            cx={2}
            r={2}
            fill={bubbleColor}
            transform='translate(0 65.067)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 110;0 -10'
              keyTimes='0;1'
              dur='3s'
              begin='-1.59s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={19}
            r={3}
            fill={bubbleColor}
            transform='translate(0 135.111)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 150;0 -50'
              keyTimes='0;1'
              dur='3s'
              begin='-0.69s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={61}
            r={2}
            fill={bubbleColor}
            transform='translate(0 33.533)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 107;0 -7'
              keyTimes='0;1'
              dur='3s'
              begin='-2.4s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={84}
            r={2}
            fill={bubbleColor}
            transform='translate(0 49.156)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 145;0 -45'
              keyTimes='0;1'
              dur='3s'
              begin='-1.98s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={81}
            r={3}
            fill={bubbleColor}
            transform='translate(0 130.178)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 138;0 -38'
              keyTimes='0;1'
              dur='3s'
              begin='-0.6s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={99}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -15.482)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 129;0 -29'
              keyTimes='0;1'
              dur='3s'
              begin='-0.21s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={14}
            r={3}
            fill={bubbleColor}
            transform='translate(0 19.751)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 132;0 -32'
              keyTimes='0;1'
              dur='3s'
              begin='-2.52s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={33}
            r={3}
            fill={bubbleColor}
            transform='translate(0 136.429)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 139;0 -39'
              keyTimes='0;1'
              dur='3s'
              begin='-0.51s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={55}
            r={3}
            fill={bubbleColor}
            transform='translate(0 65.111)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 150;0 -50'
              keyTimes='0;1'
              dur='3s'
              begin='-1.74s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={60}
            r={3}
            fill={bubbleColor}
            transform='translate(0 71.596)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 136;0 -36'
              keyTimes='0;1'
              dur='3s'
              begin='-1.59s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={71}
            r={3}
            fill={bubbleColor}
            transform='translate(0 40.322)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 115;0 -15'
              keyTimes='0;1'
              dur='3s'
              begin='-2.19s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={39}
            r={3}
            fill={bubbleColor}
            transform='translate(0 50.844)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 126;0 -26'
              keyTimes='0;1'
              dur='3s'
              begin='-1.95s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={34}
            r={4}
            fill={bubbleColor}
            transform='translate(0 34.516)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 154;0 -54'
              keyTimes='0;1'
              dur='3s'
              begin='-2.19s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={13}
            r={3}
            fill={bubbleColor}
            transform='translate(0 53.987)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 128;0 -28'
              keyTimes='0;1'
              dur='3s'
              begin='-1.89s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={9}
            r={3}
            fill={bubbleColor}
            transform='translate(0 146.138)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 147;0 -47'
              keyTimes='0;1'
              dur='3s'
              begin='-0.48s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={90}
            r={3}
            fill={bubbleColor}
            transform='translate(0 25.124)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 108;0 -8'
              keyTimes='0;1'
              dur='3s'
              begin='-2.61s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={95}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -.889)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 150;0 -50'
              keyTimes='0;1'
              dur='3s'
              begin='-2.73s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={9}
            r={3}
            fill={bubbleColor}
            transform='translate(0 72.502)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 133;0 -33'
              keyTimes='0;1'
              dur='3s'
              begin='-1.56s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={48}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -2.133)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 110;0 -10'
              keyTimes='0;1'
              dur='3s'
              begin='-0.27s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={51}
            r={3}
            fill={bubbleColor}
            transform='translate(0 99.067)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 146;0 -46'
              keyTimes='0;1'
              dur='3s'
              begin='-1.2s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={60}
            r={3}
            fill={bubbleColor}
            transform='translate(0 70.378)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 120;0 -20'
              keyTimes='0;1'
              dur='3s'
              begin='-1.53s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={56}
            r={2}
            fill={bubbleColor}
            transform='translate(0 95.562)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 151;0 -51'
              keyTimes='0;1'
              dur='3s'
              begin='-1.29s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={68}
            r={3}
            fill={bubbleColor}
            transform='translate(0 75.827)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 128;0 -28'
              keyTimes='0;1'
              dur='3s'
              begin='-1.47s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={95}
            r={4}
            fill={bubbleColor}
            transform='translate(0 29.938)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 111;0 -11'
              keyTimes='0;1'
              dur='3s'
              begin='-2.46s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={37}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -11.04)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 113;0 -13'
              keyTimes='0;1'
              dur='3s'
              begin='-0.42s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={77}
            r={4}
            fill={bubbleColor}
            transform='translate(0 -16.256)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 117;0 -17'
              keyTimes='0;1'
              dur='3s'
              begin='-0.45s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={20}
            r={2}
            fill={bubbleColor}
            transform='translate(0 6.942)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 106;0 -6'
              keyTimes='0;1'
              dur='3s'
              begin='-0.12s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={16}
            r={2}
            fill={bubbleColor}
            transform='translate(0 136.429)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 139;0 -39'
              keyTimes='0;1'
              dur='3s'
              begin='-0.51s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={27}
            r={3}
            fill={bubbleColor}
            transform='translate(0 72.349)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 139;0 -39'
              keyTimes='0;1'
              dur='3s'
              begin='-1.59s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={89}
            r={2}
            fill={bubbleColor}
            transform='translate(0 38.536)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 127;0 -27'
              keyTimes='0;1'
              dur='3s'
              begin='-2.19s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={85}
            r={4}
            fill={bubbleColor}
            transform='translate(0 85.591)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 141;0 -41'
              keyTimes='0;1'
              dur='3s'
              begin='-1.38s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={82}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -6.662)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 111;0 -11'
              keyTimes='0;1'
              dur='3s'
              begin='-0.36s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={81}
            r={2}
            fill={bubbleColor}
            transform='translate(0 5.222)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 115;0 -15'
              keyTimes='0;1'
              dur='3s'
              begin='0s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={16}
            r={2}
            fill={bubbleColor}
            transform='translate(0 -5.182)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 147;0 -47'
              keyTimes='0;1'
              dur='3s'
              begin='-2.82s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={66}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -17.947)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 134;0 -34'
              keyTimes='0;1'
              dur='3s'
              begin='-0.18s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={38}
            r={4}
            fill={bubbleColor}
            transform='translate(0 81.578)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 120;0 -20'
              keyTimes='0;1'
              dur='3s'
              begin='-1.29s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={12}
            r={3}
            fill={bubbleColor}
            transform='translate(0 12.844)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 126;0 -26'
              keyTimes='0;1'
              dur='3s'
              begin='-2.7s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={68}
            r={2}
            fill={bubbleColor}
            transform='translate(0 88.329)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 148;0 -48'
              keyTimes='0;1'
              dur='3s'
              begin='-1.38s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={40}
            r={3}
            fill={bubbleColor}
            transform='translate(0 50.978)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 138;0 -38'
              keyTimes='0;1'
              dur='3s'
              begin='-1.95s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={17}
            r={4}
            fill={bubbleColor}
            transform='translate(0 92.262)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 124;0 -24'
              keyTimes='0;1'
              dur='3s'
              begin='-1.11s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={20}
            r={3}
            fill={bubbleColor}
            transform='translate(0 134.498)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 147;0 -47'
              keyTimes='0;1'
              dur='3s'
              begin='-0.66s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={100}
            r={4}
            fill={bubbleColor}
            transform='translate(0 -22.116)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 126;0 -26'
              keyTimes='0;1'
              dur='3s'
              begin='-0.39s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={6}
            r={4}
            fill={bubbleColor}
            transform='translate(0 97.964)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 126;0 -26'
              keyTimes='0;1'
              dur='3s'
              begin='-1.02s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={40}
            r={3}
            fill={bubbleColor}
            transform='translate(0 21.222)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 124;0 -24'
              keyTimes='0;1'
              dur='3s'
              begin='-2.55s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={40}
            r={4}
            fill={bubbleColor}
            transform='translate(0 107.062)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 124;0 -24'
              keyTimes='0;1'
              dur='3s'
              begin='-0.81s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={92}
            r={4}
            fill={bubbleColor}
            transform='translate(0 13.056)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 145;0 -45'
              keyTimes='0;1'
              dur='3s'
              begin='-2.55s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={50}
            r={3}
            fill={bubbleColor}
            transform='translate(0 50.667)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 110;0 -10'
              keyTimes='0;1'
              dur='3s'
              begin='-1.95s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={32}
            r={2}
            fill={bubbleColor}
            transform='translate(0 104.827)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 146;0 -46'
              keyTimes='0;1'
              dur='3s'
              begin='-1.11s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={41}
            r={4}
            fill={bubbleColor}
            transform='translate(0 49.324)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 126;0 -26'
              keyTimes='0;1'
              dur='3s'
              begin='-1.98s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={50}
            r={4}
            fill={bubbleColor}
            transform='translate(0 -9.04)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 131;0 -31'
              keyTimes='0;1'
              dur='3s'
              begin='-0.06s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={3}
            r={3}
            fill={bubbleColor}
            transform='translate(0 19.467)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 110;0 -10'
              keyTimes='0;1'
              dur='3s'
              begin='-2.73s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={98}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -17.822)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 120;0 -20'
              keyTimes='0;1'
              dur='3s'
              begin='-0.42s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={72}
            r={2}
            fill={bubbleColor}
            transform='translate(0 103.689)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 130;0 -30'
              keyTimes='0;1'
              dur='3s'
              begin='-0.96s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={1}
            r={2}
            fill={bubbleColor}
            transform='translate(0 108.267)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 110;0 -10'
              keyTimes='0;1'
              dur='3s'
              begin='-0.51s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={17}
            r={2}
            fill={bubbleColor}
            transform='translate(0 95.422)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 106;0 -6'
              keyTimes='0;1'
              dur='3s'
              begin='-0.75s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={32}
            r={2}
            fill={bubbleColor}
            transform='translate(0 71.467)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 119;0 -19'
              keyTimes='0;1'
              dur='3s'
              begin='-1.5s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={71}
            r={2}
            fill={bubbleColor}
            transform='translate(0 4.942)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 124;0 -24'
              keyTimes='0;1'
              dur='3s'
              begin='-2.88s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={29}
            r={3}
            fill={bubbleColor}
            transform='translate(0 77.111)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 150;0 -50'
              keyTimes='0;1'
              dur='3s'
              begin='-1.56s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={63}
            r={3}
            fill={bubbleColor}
            transform='translate(0 115.413)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 116;0 -16'
              keyTimes='0;1'
              dur='3s'
              begin='-0.48s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={4}
            r={2}
            fill={bubbleColor}
            transform='translate(0 11.369)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 103;0 -3'
              keyTimes='0;1'
              dur='3s'
              begin='-0.06s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={62}
            r={4}
            fill={bubbleColor}
            transform='translate(0 34.516)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 154;0 -54'
              keyTimes='0;1'
              dur='3s'
              begin='-2.19s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={72}
            r={3}
            fill={bubbleColor}
            transform='translate(0 51.067)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 146;0 -46'
              keyTimes='0;1'
              dur='3s'
              begin='-1.95s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={82}
            r={3}
            fill={bubbleColor}
            transform='translate(0 76.311)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 114;0 -14'
              keyTimes='0;1'
              dur='3s'
              begin='-1.35s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={86}
            r={3}
            fill={bubbleColor}
            transform='translate(0 77.324)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 108;0 -8'
              keyTimes='0;1'
              dur='3s'
              begin='-1.26s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={45}
            r={3}
            fill={bubbleColor}
            transform='translate(0 110.916)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 127;0 -27'
              keyTimes='0;1'
              dur='3s'
              begin='-0.78s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={41}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -.538)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 133;0 -33'
              keyTimes='0;1'
              dur='3s'
              begin='-2.88s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={62}
            r={3}
            fill={bubbleColor}
            transform='translate(0 79.333)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 125;0 -25'
              keyTimes='0;1'
              dur='3s'
              begin='-1.38s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={59}
            r={4}
            fill={bubbleColor}
            transform='translate(0 -10.378)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 115;0 -15'
              keyTimes='0;1'
              dur='3s'
              begin='-0.36s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={48}
            r={3}
            fill={bubbleColor}
            transform='translate(0 5.033)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 107;0 -7'
              keyTimes='0;1'
              dur='3s'
              begin='-0.15s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={65}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -11.691)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 121;0 -21'
              keyTimes='0;1'
              dur='3s'
              begin='-0.27s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={87}
            r={3}
            fill={bubbleColor}
            transform='translate(0 3.458)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 138;0 -38'
              keyTimes='0;1'
              dur='3s'
              begin='-2.76s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={9}
            r={4}
            fill={bubbleColor}
            transform='translate(0 85.187)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 128;0 -28'
              keyTimes='0;1'
              dur='3s'
              begin='-1.29s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={47}
            r={2}
            fill={bubbleColor}
            transform='translate(0 -9.698)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 142;0 -42'
              keyTimes='0;1'
              dur='3s'
              begin='-2.94s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={94}
            r={3}
            fill={bubbleColor}
            transform='translate(0 52.862)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 142;0 -42'
              keyTimes='0;1'
              dur='3s'
              begin='-1.92s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={23}
            r={2}
            fill={bubbleColor}
            transform='translate(0 117.262)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 142;0 -42'
              keyTimes='0;1'
              dur='3s'
              begin='-0.87s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={34}
            r={4}
            fill={bubbleColor}
            transform='translate(0 117.244)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 135;0 -35'
              keyTimes='0;1'
              dur='3s'
              begin='-0.78s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={52}
            r={4}
            fill={bubbleColor}
            transform='translate(0 131.007)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 137;0 -37'
              keyTimes='0;1'
              dur='3s'
              begin='-0.57s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={80}
            r={3}
            fill={bubbleColor}
            transform='translate(0 7.333)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 125;0 -25'
              keyTimes='0;1'
              dur='3s'
              begin='-2.82s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={31}
            r={3}
            fill={bubbleColor}
            transform='translate(0 70.04)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 104;0 -4'
              keyTimes='0;1'
              dur='3s'
              begin='-1.41s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={11}
            r={3}
            fill={bubbleColor}
            transform='translate(0 117.971)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 123;0 -23'
              keyTimes='0;1'
              dur='3s'
              begin='-0.57s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={37}
            r={3}
            fill={bubbleColor}
            transform='translate(0 21.689)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 148;0 -48'
              keyTimes='0;1'
              dur='3s'
              begin='-2.4s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={12}
            r={4}
            fill={bubbleColor}
            transform='translate(0 20.693)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 134;0 -34'
              keyTimes='0;1'
              dur='3s'
              begin='-2.49s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={57}
            r={3}
            fill={bubbleColor}
            transform='translate(0 -33.502)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 138;0 -38'
              keyTimes='0;1'
              dur='3s'
              begin='-0.39s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={12}
            r={2}
            fill={bubbleColor}
            transform='translate(0 16.431)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 141;0 -41'
              keyTimes='0;1'
              dur='3s'
              begin='-2.52s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={22}
            r={4}
            fill={bubbleColor}
            transform='translate(0 102.142)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 106;0 -6'
              keyTimes='0;1'
              dur='3s'
              begin='-0.57s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={5}
            r={2}
            fill={bubbleColor}
            transform='translate(0 36.151)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 132;0 -32'
              keyTimes='0;1'
              dur='3s'
              begin='-2.22s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={74}
            r={2}
            fill={bubbleColor}
            transform='translate(0 8.189)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 103;0 -3'
              keyTimes='0;1'
              dur='3s'
              begin='-0.15s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={24}
            r={2}
            fill={bubbleColor}
            transform='translate(0 135.6)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 140;0 -40'
              keyTimes='0;1'
              dur='3s'
              begin='-0.54s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={97}
            r={4}
            fill={bubbleColor}
            transform='translate(0 -13.111)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 130;0 -30'
              keyTimes='0;1'
              dur='3s'
              begin='-0.15s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={89}
            r={3}
            fill={bubbleColor}
            transform='translate(0 145.111)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 150;0 -50'
              keyTimes='0;1'
              dur='3s'
              begin='-0.54s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={80}
            r={3}
            fill={bubbleColor}
            transform='translate(0 72.516)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 118;0 -18'
              keyTimes='0;1'
              dur='3s'
              begin='-1.47s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={39}
            r={2}
            fill={bubbleColor}
            transform='translate(0 30.113)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 107;0 -7'
              keyTimes='0;1'
              dur='3s'
              begin='-2.49s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={37}
            r={2}
            fill={bubbleColor}
            transform='translate(0 104.833)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 125;0 -25'
              keyTimes='0;1'
              dur='3s'
              begin='-0.87s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={95}
            r={2}
            fill={bubbleColor}
            transform='translate(0 58.667)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 128;0 -28'
              keyTimes='0;1'
              dur='3s'
              begin='-1.8s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={90}
            r={3}
            fill={bubbleColor}
            transform='translate(0 10.613)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 134;0 -34'
              keyTimes='0;1'
              dur='3s'
              begin='-2.67s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={17}
            r={3}
            fill={bubbleColor}
            transform='translate(0 51.089)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 148;0 -48'
              keyTimes='0;1'
              dur='3s'
              begin='-1.95s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={67}
            r={4}
            fill={bubbleColor}
            transform='translate(0 15.622)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 115;0 -15'
              keyTimes='0;1'
              dur='3s'
              begin='-2.76s'
              repeatCount='indefinite'
            />
          </circle>
          <circle cx={58} r={3} fill={bubbleColor} transform='translate(0 6)'>
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 140;0 -40'
              keyTimes='0;1'
              dur='3s'
              begin='-2.7s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={22}
            r={4}
            fill={bubbleColor}
            transform='translate(0 74.129)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 139;0 -39'
              keyTimes='0;1'
              dur='3s'
              begin='-1.56s'
              repeatCount='indefinite'
            />
          </circle>
          <circle
            cx={64}
            r={4}
            fill={bubbleColor}
            transform='translate(0 76.298)'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0 111;0 -11'
              keyTimes='0;1'
              dur='3s'
              begin='-1.32s'
              repeatCount='indefinite'
            />
          </circle>
        </pattern>
      </defs>
      <path
        fill='url(#prefix__a)'
        clipPath='url(#prefix__b)'
        d='M59 37.3V18.9c3-.8 5.1-3.6 5.1-6.8 0-3.9-3.1-7.1-7-7.1H42.9c-3.9 0-7.1 3.2-7.1 7.1 0 3.2 2.2 6 5.1 6.8v18.4c-11.9 3.8-20.6 15-20.6 28.2C20.4 81.8 33.7 95 50 95s29.6-13.2 29.6-29.6c0-13.2-8.7-24.3-20.6-28.1z'
      />
      <path
        fill='none'
        stroke={flaskColor}
        strokeWidth={5}
        d='M59 37.3V18.9c3-.8 5.1-3.6 5.1-6.8 0-3.9-3.1-7.1-7-7.1H42.9c-3.9 0-7.1 3.2-7.1 7.1 0 3.2 2.2 6 5.1 6.8v18.4c-11.9 3.8-20.6 15-20.6 28.2C20.4 81.8 33.7 95 50 95s29.6-13.2 29.6-29.6c0-13.2-8.7-24.3-20.6-28.1z'
      />
    </svg>
  );
}

export default LoadFlask;
