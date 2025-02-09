//https://codesandbox.io/p/sandbox/react-colorful-popover-opmco?file=%2Fsrc%2FPopoverPicker.js%3A1%2C1-29%2C1

import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import tinycolor from "tinycolor2";
import useClickOutside from "../hooks/ClickOutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PopoverPicker = ({ color, onChange, icon }) => {
	const popover = useRef();
	const [isOpen, toggle] = useState(false);

	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);
	const iconColor = tinycolor(color).isDark() ? "white" : "black";

	return (
		<div className='relative '>
			<div
				className='w-12 h-12 cursor-pointer rounded-lg shadow-md border-4 border-white flex items-center justify-center	'
				style={{ backgroundColor: color }}
				onClick={() => toggle(true)}
			>
				<FontAwesomeIcon icon={icon} color={iconColor} />
			</div>

			{isOpen && (
				<div
					className='absolute right-[50px] rounded-lg bottom-0  border-4 border-white bg-white shadow-md '
					ref={popover}
				>
					<HexColorPicker color={color} onChange={onChange} />
				</div>
			)}
		</div>
	);
};
