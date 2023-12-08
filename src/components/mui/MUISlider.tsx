"use client";
import {
  VolumeDown,
  VolumeMute,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { Slider, Typography } from "@mui/material";
import { useState } from "react";

type Props = {};

const MUISlider = (props: Props) => {
  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 30,
      label: "30°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];

  const [slider, setSlider] = useState<number>(50);
  const [slider2, setSlider2] = useState<number>(0);
  const [slider3, setSlider3] = useState<number[]>([30, 50, 70]);
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div>
      <Typography variant="h6" color="black" className="font-bold mt-10">
        Slider
      </Typography>
      <div className="py-5 px-20 border-4 border-dashed border-black">
        <div className="flex space-x-10">
          <div className="flex-1">
            <div className="flex items-center space-x-5 mb-5">
              <span
                onClick={() => {
                  if (isActive) {
                    setIsActive(false);
                    setSlider(0);
                  } else {
                    setIsActive(true);
                  }
                }}
              >
                {!isActive && <VolumeOff />}
                {isActive && slider === 0 && <VolumeMute />}
                {isActive && slider > 0 && slider < 50 && <VolumeDown />}
                {isActive && slider >= 50 && <VolumeUp />}
              </span>
              <Slider
                value={slider}
                onChange={(e, value) => {
                  if (isActive) {
                    setSlider(value as number);
                  } else {
                    setIsActive(true);
                    setSlider(value as number);
                  }
                }}
                track={false}
                marks
                step={10}
                min={0}
                max={200}
              />
            </div>
            <Slider
              value={slider3}
              onChange={(e, value) => setSlider3(value as number[])}
              marks={marks}
              track={"inverted"}
              color="secondary"
              valueLabelDisplay="auto"
            />
          </div>
          <Slider
            className="h-48"
            value={slider2}
            onChange={(e, value) => setSlider2(value as number)}
            orientation="vertical"
            marks={marks}
            step={10}
            min={0}
            track={"inverted"}
            max={100}
          />
        </div>
      </div>
    </div>
  );
};

export default MUISlider;
