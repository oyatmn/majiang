{
  "_$ver": 1,
  "_$id": "pr6hl2hu",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "88cea8c6-4a81-42db-a610-0031e37e3bcb",
      "scriptPath": "../src/LoginScript.ts",
      "accountTextInput": {
        "_$ref": "b7a6xxay"
      },
      "passwordTextInput": {
        "_$ref": "0tzvyn9e"
      },
      "btn": {
        "_$ref": "tnhbrlex"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "d3yz20nd",
      "_$type": "Sprite",
      "name": "Sprite",
      "width": 1334,
      "height": 750,
      "texture": {
        "_$uuid": "bb8c567d-43a6-4933-b438-73695c461efe",
        "_$type": "Texture"
      },
      "_mouseState": 2,
      "_$child": [
        {
          "_$id": "0tzvyn9e",
          "_$type": "TextInput",
          "name": "password",
          "x": 505,
          "y": 303,
          "width": 325,
          "height": 72,
          "_mouseState": 2,
          "centerX": 0,
          "text": "密码",
          "font": "KaiTi",
          "fontSize": 30,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "overflow": "scroll",
          "padding": "2,6,2,6",
          "skin": "res://87262606-4dfe-490e-8644-7fd6496c2be7",
          "type": "text",
          "maxChars": 0,
          "prompt": "",
          "promptColor": "#A9A9A9"
        },
        {
          "_$id": "b7a6xxay",
          "_$type": "TextInput",
          "name": "account",
          "x": 505,
          "y": 187.00000000000006,
          "width": 325,
          "height": 70,
          "_mouseState": 2,
          "centerX": 0,
          "text": "账号",
          "font": "KaiTi",
          "fontSize": 30,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "overflow": "scroll",
          "padding": "2,6,2,6",
          "skin": "res://87262606-4dfe-490e-8644-7fd6496c2be7",
          "type": "text",
          "maxChars": 0,
          "prompt": "",
          "promptColor": "#A9A9A9"
        },
        {
          "_$id": "tnhbrlex",
          "_$type": "Image",
          "name": "login",
          "x": 490,
          "y": 435,
          "width": 362,
          "height": 134,
          "centerX": 4,
          "skin": "res://a1ef9556-2ee8-47c9-9c36-aa33f09bd456",
          "useSourceSize": true,
          "color": "#ffffff"
        }
      ]
    }
  ]
}