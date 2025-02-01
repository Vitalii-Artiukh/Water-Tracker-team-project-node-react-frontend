

import css from './WaterRatioPanel.module.css';


const WaterRatioPanel = () => {

    const marks = [0, 50, 100];

    return (
        <div className={css.wrap}>
            <p className={css.title}>Today</p>
            <div className={css.boxSlider}>
            <div className={css.sliderWrapper}>
            <input 
            type='range'
            min='0'
            max='100'
            value
            onChange
            className={css.slider}
            />
            <div className={css.marks}>
            {marks.map(mark => {
                return <span
                // key={mark}
                // className={`${css.mark} ${currentServing >= mark ? css.activeMark : ''}`}
                // style={{left: `${(mark / dailyNorm) / 100}%`}}
                key={mark}
                className={css.mark}
                >
                {mark}%
                </span>
            })}
            </div>
            </div>
            <button className={css.btn} onClick>Add Water</button>
            </div>
        </div>
    )
};

//   return (
//     <div>
//         <p>Today</p>
//         <Box sx={{ width: 360}}>
//         {/* <Typography variant="h6">Today</Typography> */}
//         <Slider
//           value={currentServing}
//           onChange={(e, newValue) => dispatch(setCurrentServing(newValue))}
//           aria-label="Restricted values"
//           min={0}
//           max={dailyNorm}
//         //   step={null}
//           marks={marks}
//         // marks={marks.map(mark => ({
//         //     ...mark,
//         //     label: (
//         //       <span
//         //         style={{
//         //           fontSize: mark.value === currentServing ? "16px" : "12px",
//         //           fontWeight: mark.value === currentServing ? "500px" : "400px",
//         //           lineHeight: mark.value === currentServing ? "1.25" : "1.33",
//         //           color: "#407bff",
//         //         }}
//         //       >
//         //         {mark.label}
//         //       </span>
//         //     ),
//         //   }))}
//           valueLabelDisplay="auto"
//           sx={{
//             "& .MuiSlider-rail": {
//                 height: 8, // Товщина всієї шкали
//                 backgroundColor: "#d7e3ff", // Колір неактивної частини шкали
//                 borderRadius: 10,
//             },
//             "& .MuiSlider-track": {
//                 height: 8, // Товщина заповненої частини шкали
//                 backgroundColor: "#9ebbff", // Колір активної частини
//                 borderRadius: 10,
//                 border: "transparent",
//               },
//             "& .MuiSlider-thumb": {
//                 width: 14, // Збільшений бігунок
//                 height: 14,
//                 border: "1px solid #407bff", // Синя рамка
//                 backgroundColor: "#ffffff", // Прозорий центр
//               },
//             // "& .MuiSlider-markLabel": {
//             //     fontSize: "12px",  // Розмір шрифту
//             //     fontWeight: "400px", // Товщина
//             //     lineHeight: "1.33",
//             //     color: "#407bff", // Колір тексту
//             // },
//             "& .MuiSlider-mark": {
//                 height: 8, // Висота риски
//                 // width: 0,
//                 border: "1px solid #d7e3ff",
//                 // bottom: -10, // Опускаємо під шкалу
//                 transform: "translate(-50%, 120%)",
//               },
//           }}
//         />
//         {/* <Button variant="contained" color="primary" onClick={handleAddWater}>
//           Add Water
//         </Button> */}
//       </Box>
//         <button onClick={handleAddWater}>Add Water</button>
//     </div>
//   )
// }

export default WaterRatioPanel