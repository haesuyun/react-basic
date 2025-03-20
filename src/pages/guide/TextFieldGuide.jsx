import React, {useState, useRef} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/guide.module.scss";
import UiTextField from "@/components/TextField"
// mui
import { Box, TextField, FormControl, InputLabel, OutlinedInput,InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function MuiTextField() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const [value, setValue] = useState('')
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">인증번호</InputLabel>
        <OutlinedInput
          type="tel"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              {(value!=="" ) && 
                <button 
                  type="button" 
                  className={clsx("mr-2", style.clearable)}       
                  onClick={()=>setValue("")}>
                  <i
                    className="icon icon-small delete-gray"
                    aria-label="삭제"
                  ></i>
                </button>}
              <button type="button" className="button bg-secondary">
                시간연장
              </button>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Box>
  );
}

export default function TextFieldGuide(){
  const tempValue = useRef(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ea ex magnam quia optio! Incidunt dolor ea quos, ex magni, quo et adipisci quae est qui at, nihil ratione iusto?`)
  
  return (
    <section>
      <h1 className={style.h1}>TextField</h1><table className={style.table}>
      <thead>
        <tr>
          <th className="text-center">type</th>
          <th>size</th>
          <th>view</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>material TextField</th>
          <td></td>
          <td>
            <MuiTextField/>
          </td>
        </tr>
        <tr>
          <th>TextField</th>
          <td></td>
          <td>
            <UiTextField label="이름" placeholder="이름 입력"/>
            <UiTextField readonly label="이름 readonly" placeholder="이름 입력" value="홍길동"/>
            <UiTextField disabled label="이름 disabled" placeholder="이름 입력" value="홍길동"/>
            <UiTextField 
              label="인증번호" 
              placeholder="인증번호 6자리 입력" 
              value="012345" 
              type="tel" 
              message="인증번호 6자리를 입력하세요">
              <button type="button" className="button bg-secondary">
                시간연장
              </button>
            </UiTextField>
            <UiTextField 
              required 
              label="인증번호 required" 
              placeholder="인증번호 6자리 입력" 
              value="012345" 
              type="tel" 
              message="인증번호 6자리를 입력하세요" 
              error 
              errorMessage="인증번호 6자리를 입력하세요!" 
              onChange={(e)=>console.log(e.target.value)}>
                <button type="button" className="button bg-secondary">
                  시간연장
                </button>
            </UiTextField>
          </td>
        </tr>
        <tr>
          <th>TextField multiline</th>
          <td></td>
          <td>
            <UiTextField label="내용 default" placeholder="내용 입력" multiline/>
            <UiTextField label="내용 multiline maxRows 4" placeholder="내용 입력" multiline maxRows={4} value={tempValue.current} error errorMessage="Error message!!"/>
            <UiTextField label="내용 multiline rows 3" placeholder="내용 입력" multiline rows={3}/>
          </td>
        </tr>
      </tbody>
      </table>
    </section>
  )
}