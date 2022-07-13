#!/usr/bin/env python3
"""RECIBE oel numero del pi//all como primer parametro y on/offcomo segundo"  11 12 13 15"""
import RPi.GPIO as gpio
import sys
gpio.setmode(gpio.BOARD)
gpio.setwarnings(False)
if(len(sys.argv)==3):
    orden = sys.argv[2]
    pin = sys.argv[1]
    if(pin!="all"):
        pin=int(pin)

    print ('Orden:'+orden + ' el pin ' + str(pin ))
if(pin=="all"):
    gpio.setup(11,gpio.OUT)
    gpio.setup(12,gpio.OUT)
    gpio.setup(13,gpio.OUT)
    gpio.setup(15,gpio.OUT)
else:
    gpio.setup(pin,gpio.OUT)


if(orden=='on'):
    if(pin=="all"):
        gpio.output(11,True)
        gpio.output(12,True)
        gpio.output(13,True)
        gpio.output(15,True)
    else:
        gpio.output(pin,True)
else:
    if(pin=="all"):
        gpio.output(11,False)
        gpio.output(12,False)
        gpio.output(13,False)
        gpio.output(15,False)
    else:
        gpio.output(pin,False)
        
print("estoy en python")
sys.stdout.flush()