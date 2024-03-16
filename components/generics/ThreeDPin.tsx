"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo(props: any) {
  return (
    <div className="h-[35rem] flex items-center justify-center ">
      <PinContainer title="/ui.aceternity.com" href="www.google.com">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {props.plan.name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{props.plan.price}</span>
          </div>
          {props.plan.features.map((feature: string, index: number) => (
            <li key={index} className="text-sm mb-2">
              ✓ {feature}
            </li>
          ))}
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
