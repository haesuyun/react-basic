import style from "@/assets/style/module/guide.module.scss";
import UiIcon from "@/components/Icon";
import UiTextField from "@/components/TextField";
import clsx from "clsx";
import React, { useRef, useState } from "react";
// mui
import AccountCircle from '@mui/icons-material/AccountCircle';
import ClearIcon from '@mui/icons-material/Clear';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';

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
  const [text, setText] = React.useState('');
  const handleClear = () => {
    setText(''); // 텍스트 삭제
  };
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 , width: '90%' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField
        label="ClearText"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        // slotProps를 통해 내부 Input 컴포넌트에 endAdornment 주입
        slotProps={{
          input: {
            endAdornment: text && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="텍스트 삭제"
                  onClick={handleClear}
                  edge="end"
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        label="With a start adornment"
        variant="standard"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }
        }}
      />
      <TextField 
        label="Password"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        autoComplete="current-password"
        slotProps={{
          input: {
            endAdornment: (
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
            ),
          }
        }}
      />
      <TextField 
        label="인증번호"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {(value!=="" ) && 
                  <button 
                    type="button" 
                    className={clsx("mr-2", style.clearable)}       
                    onClick={()=>setValue("")}>
                    <i
                      className="icon-small delete-gray"
                      aria-label="삭제"
                    ></i>
                  </button>}
                  <button type="button" className="button bg-secondary">
                    시간연장
                  </button>
              </InputAdornment>
            )
          }
      }}/> 
    </Box>
  );
}

export const meta = {
  depth01: "guide",
  depth02: "",
  depth03: "",
  id: "",
  name: "TextField",
  author: "",
  state: "완료",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  }
}

export default function TextFieldGuide(){
  const tempValue = useRef(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ea ex magnam quia optio! Incidunt dolor ea quos, ex magni, quo et adipisci quae est qui at, nihil ratione iusto?`)
  
  return (
    <section>
      <table className={style.table}>
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
            <UiTextField label="startAdornment" placeholder="검색어 입력" startAdornment={<UiIcon icon="search" size="large" color="primary" />}/>
            <UiTextField label="endAdornment" placeholder="검색어 입력" endAdornment={<UiIcon icon="search" size="large" color="primary" />}/>
            <UiTextField label="default slot : button" placeholder="검색어 입력">
            <button type="button">
              <UiIcon icon="search" size="large" color="primary" />
            </button>
            </UiTextField>
            <UiTextField label="이름" placeholder="이름 입력"/>
            <UiTextField label="clearable false" placeholder="기본값 true" clearable={false}/>
            <UiTextField readonly label="이름 readonly" placeholder="이름 입력" value="홍길동"/>
            <UiTextField disabled label="이름 disabled" placeholder="이름 입력" value="홍길동"/>
            <UiTextField 
              label="인증번호" 
              placeholder="인증번호 6자리 입력" 
              value="012345" 
              type="tel" 
              message="인증번호 6자리를 입력하세요">
              <button type="button" className="button bg-secondary" onClick={()=>console.log("click")}>
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
                <button type="button" className="button bg-secondary" onClick={()=>console.log("click")}>
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