"use client";
import React from "react";
import MUIRadio from "@/components/mui/MUIRadio";
import MUITypography from "@/components/mui/MUITypography";
import MUIButton from "@/components/mui/MUIButton";
import MUICheckbox from "@/components/mui/MUICheckbox";
import MUISlider from "@/components/mui/MUISlider";
import MUICard from "@/components/mui/MUICard";
import MUIFab from "@/components/mui/MUIFab";
import MUIRating from "@/components/mui/MUIRating";
import MUISelect from "@/components/mui/MUISelect";
import MUISwitch from "@/components/mui/MUISwitch";
import MUITextField from "@/components/mui/MUITextField";
import MUIFormControl from "@/components/mui/MUIFormControl";
import MUIGrid from "@/components/mui/MUIGrid";
import MUIList from "@/components/mui/MUIList";
import MUIDataDisplay from "@/components/mui/MUIDataDisplay";
import MUITable from "@/components/mui/MUITable";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="bg-gray-400">
      <MUITypography />
      <MUIButton />
      <MUICheckbox />
      <MUIFab />
      <MUIRadio />
      <MUIRating />
      <MUISelect />
      <MUISlider />
      <MUISwitch />
      <MUITextField />
      <MUICard />
      <MUIDataDisplay />
      <MUIFormControl />
      <MUIGrid />
      <MUIList />
      <MUITable />
    </div>
  );
};

export default Page;
