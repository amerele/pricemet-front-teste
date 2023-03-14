import styled from '@emotion/styled';
import * as React from 'react';
import { useState, useEffect } from 'react';

export const Button = styled.button`
    position: relative;
    padding: 10px 20px;
    overflow: hidden;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-top:20px;
    transition: .2s;
    &:hover{
        box-shadow: 0 0 35px #00000025,
        0 0 10px #00000025,
        0 0 15px #00000025,
        0 0 100px #00000025;
        
    }
    
`;

export const Headr = styled.div`
    height: 50px;
    padding: 2px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 11px 35px 2px #00000014;
`;

export const Navlink = styled.button`
    font-size: 12pt;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1px 4px;
    border-bottom: 2px solid transparent;
    &:hover{
        border-color: #d53f8c
    }
`;

export const ToggButt = styled.button`
    padding: 0 4px;
    text-decoration: underline #d53f8c;
    transition: .2s;
    &:hover{
        font-size: 14pt
    }
`;