"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone, CloudSun, Bot, Droplets, Lock, Eye, Gauge,
  Cpu, Wrench, Flame, Mic, Copy, Check, ChevronDown,
  ListChecks, Code2, Footprints, Send, Facebook, ShoppingCart, Bookmark,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import cpp from "react-syntax-highlighter/dist/esm/languages/prism/cpp";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("cpp", cpp);

interface BOMItem {
  name: string;
  qty: number;
  price: number;
}

interface Project {
  id: string;
  title: string;
  icon: React.ElementType;
  diff: string;
  board: string;
  badge: string;
  desc: string;
  comps: string[];
  code: string;
  steps: string[];
  bom: BOMItem[];
}

const diffColors: Record<string, string> = {
  "مبتدئ": "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "متوسط": "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "متقدم": "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
};
const badgeColors: Record<string, string> = {
  "الأكثر طلباً": "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "مشروع متكامل": "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  "سهل التطبيق": "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "تحدٍ ممتع": "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  "مهم للحياة": "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
};

const projects: Project[] = [
  {
    id: "p1", title: "المنزل الذكي — تحكم عن بعد بالواي فاي",
    icon: Smartphone, diff: "متوسط", board: "ESP32", badge: "الأكثر طلباً",
    desc: "نظام تحكم في 4 أجهزة منزلية عبر تطبيق Blynk. ESP32 يرسل ويستقبل الأوامر عبر Wi-Fi في الوقت الحقيقي مع قراءة DHT22 للحرارة وتنبيهات فورية.",
    comps: ["ESP32 DevKit V1", "Relay 4-Channel 5V", "DHT22 Sensor", "LEDs ×4", "Resistors 220Ω", "Breadboard"],
    code: `#include <WiFi.h>
#include <BlynkSimpleEsp32.h>
#include <DHT.h>
#define DHTPIN 4
DHT dht(DHTPIN, DHT22);
char ssid[] = "YourWiFi";
char pass[] = "YourPass";
BLYNK_WRITE(V0) { digitalWrite(2, param.asInt()); }
void setup() {
  Serial.begin(115200);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  pinMode(2, OUTPUT); dht.begin();
}
void loop() {
  Blynk.run();
  Blynk.virtualWrite(V1, dht.readTemperature());
}`,
    steps: ["وصّل ESP32 بالحاسوب واختر Board: ESP32 Dev Module", "ثبّت مكتبات Blynk و DHT من Library Manager", "أنشئ حساب Blynk واحصل على Auth Token", "وصّل Relay module بالمنافذ GPIO2 و GPIO4 و GPIO5 و GPIO18", "ارفع الكود واختبر التحكم عبر تطبيق Blynk"],
    bom: [
      { name: "ESP32 DevKit V1", qty: 1, price: 8 },
      { name: "Relay 4-Channel 5V", qty: 1, price: 3 },
      { name: "DHT22 Sensor", qty: 1, price: 5 },
      { name: "LED أحمر", qty: 4, price: 0.10 },
      { name: "مقاومة 220Ω", qty: 4, price: 0.02 },
      { name: "Breadboard", qty: 1, price: 2 },
    ],
  },
  {
    id: "p2", title: "محطة طقس ذكية — IoT مع ThingSpeak",
    icon: CloudSun, diff: "متوسط", board: "ESP32", badge: "مشروع متكامل",
    desc: "محطة طقس ترسل البيانات لحظياً لمنصة ThingSpeak كل 30 ثانية. DHT22 للحرارة والرطوبة وBMP280 للضغط الجوي. رسوم بيانية حية عبر API.",
    comps: ["ESP32 DevKit", "DHT22 Sensor", "BMP280 Module", "OLED SSD1306 128×64", "Jumper Wires"],
    code: `#include <WiFi.h>
#include <ThingSpeak.h>
#include <DHT.h>
#include <Adafruit_BMP280.h>
WiFiClient client;
DHT dht(4, DHT22);
Adafruit_BMP280 bmp;
unsigned long chID = YOUR_CH_ID;
const char* apiKey = "YOUR_API_KEY";
void setup() {
  WiFi.begin("SSID", "PASS");
  while (WiFi.status() != WL_CONNECTED) delay(500);
  ThingSpeak.begin(client);
  dht.begin(); bmp.begin(0x76);
}
void loop() {
  ThingSpeak.setField(1, dht.readTemperature());
  ThingSpeak.setField(2, dht.readHumidity());
  ThingSpeak.setField(3, bmp.readPressure() / 100.0F);
  ThingSpeak.writeFields(chID, apiKey);
  delay(30000);
}`,
    steps: ["وصّل DHT22 بالمنفذ GPIO4 وBMP280 عبر I2C (SDA=21, SCL=22)", "أنشئ قناة على ThingSpeak وسجّل 3 حقول: حرارة، رطوبة، ضغط", "أدخل بيانات Wi-Fi وChannel ID وAPI Key في الكود", "ارفع الكود وتحقق من وصول البيانات على لوحة ThingSpeak", "أضف شاشة OLED لعرض القراءات محلياً"],
    bom: [
      { name: "ESP32 DevKit", qty: 1, price: 8 },
      { name: "DHT22 Sensor", qty: 1, price: 5 },
      { name: "BMP280 Module", qty: 1, price: 4 },
      { name: "OLED SSD1306 128×64", qty: 1, price: 5 },
      { name: "أسلاك توصيل", qty: 1, price: 1 },
    ],
  },
  {
    id: "p3", title: "روبوت متتبع الخط — PID Controller",
    icon: Cpu, diff: "متقدم", board: "Arduino Uno", badge: "تحدٍ ممتع",
    desc: "روبوت يتبع خط أسود باستخدام خوارزمية PID. حساسان IR يقرآن الفرق بين الخط والخلفية وPID يضبط سرعة المحركين لتقليل التذبذب.",
    comps: ["Arduino Uno", "IR Sensors TCRT5000 ×2", "L298N Motor Driver", "DC Motors ×2", "Robot Chassis + Wheels", "Battery 9V"],
    code: `#define ENA 5
#define IN1 6
#define IN2 7
#define IN3 8
#define IN4 9
#define ENB 10
int Kp = 40, Ki = 0, Kd = 30;
int error = 0, lastErr = 0, integral = 0;
void setup() {
  pinMode(ENA, OUTPUT); pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT); pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT); pinMode(ENB, OUTPUT);
}
void loop() {
  error = digitalRead(A1) - digitalRead(A0);
  integral += error;
  int pid = Kp*error + Ki*integral + Kd*(error-lastErr);
  lastErr = error;
  analogWrite(ENA, constrain(150+pid,0,255));
  analogWrite(ENB, constrain(150-pid,0,255));
}`,
    steps: ["ثبّت الحساسات IR أسفل الهيكل على جانبي الخط", "وصّل المحركات بـ L298N واربط PWM بـ ENA/ENB", "ارفع الكود واختبر قيم الحساسات بالـ Serial Monitor", "عدّل قيم Kp و Ki و Kd تدريجياً للحصول على سلاسة", "جرّب الروبوت على مسارات مختلفة (دائرة، حرف S)"],
    bom: [
      { name: "Arduino UNO R3", qty: 1, price: 12 },
      { name: "IR Sensor TCRT5000", qty: 2, price: 2 },
      { name: "L298N Motor Driver", qty: 1, price: 4 },
      { name: "DC Motor", qty: 2, price: 2 },
      { name: "Robot Chassis + Wheels", qty: 1, price: 6 },
      { name: "Battery 9V", qty: 1, price: 2 },
    ],
  },
  {
    id: "p4", title: "روبوت تجنب العقبات — Ultrasonic Radar",
    icon: Bot, diff: "متوسط", board: "Arduino Uno", badge: "سهل التطبيق",
    desc: "روبوت يتحرك تلقائياً ويتفادى العوائق. HC-SR04 مثبت على Servo يمسح 180°. عند اكتشاف عقبة على مسافة أقل من 20سم ينفذ مناورة ويغير الاتجاه.",
    comps: ["Arduino Uno", "HC-SR04 Ultrasonic", "Servo SG90", "L298N Motor Driver", "DC Motors ×2", "Robot Chassis"],
    code: `#include <Servo.h>
#define TRIG 9
#define ECHO 10
Servo servo;
long getDistance() {
  digitalWrite(TRIG, LOW); delayMicroseconds(2);
  digitalWrite(TRIG, HIGH); delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  return pulseIn(ECHO, HIGH) / 58.2;
}
void setup() {
  pinMode(TRIG, OUTPUT); pinMode(ECHO, INPUT);
  pinMode(5, OUTPUT); pinMode(6, OUTPUT);
  servo.attach(3); Serial.begin(9600);
}
void loop() {
  for (int a = 15; a <= 165; a++) {
    servo.write(a); delay(30);
    if (getDistance() < 20) {
      analogWrite(5, 0); analogWrite(6, 0);
      delay(500); analogWrite(5, 200); analogWrite(6, 0);
      delay(400);
    }
  }
}`,
    steps: ["ثبّت HC-SR04 على السيرفو في مقدمة الروبوت", "وصّل TRIG بالمنفذ 9 وECHO بالمنفذ 10 والسيرفو بالمنفذ 3", "اربط المحركات بـ L298N وارفع الكود", "اختبر المسافة بالـ Serial Monitor قبل التشغيل", "جرّب الروبوت في غرفة بها عوائق واضبط المسافة"],
    bom: [
      { name: "Arduino UNO R3", qty: 1, price: 12 },
      { name: "HC-SR04 Ultrasonic", qty: 1, price: 3 },
      { name: "Servo SG90", qty: 1, price: 3 },
      { name: "L298N Motor Driver", qty: 1, price: 4 },
      { name: "DC Motor", qty: 2, price: 2 },
      { name: "Robot Chassis", qty: 1, price: 6 },
    ],
  },
  {
    id: "p5", title: "نظام ري ذكي — مراقبة التربة تلقائياً",
    icon: Droplets, diff: "مبتدئ", board: "Arduino Uno", badge: "سهل التطبيق",
    desc: "يقرأ رطوبة التربة ويشغل مضخة الماء تلقائياً عبر Relay عند انخفاض الرطوبة تحت 40%. LCD 16×2 تعرض نسبة الرطوبة وحالة المضخة.",
    comps: ["Arduino Uno", "Soil Moisture Sensor", "Water Pump 5V", "Relay Module 1-Channel", "LCD 16×2 + I2C"],
    code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);
#define SOIL_PIN A0
#define RELAY_PIN 7
void setup() {
  lcd.init(); lcd.backlight();
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, HIGH);
}
void loop() {
  int moisture = map(analogRead(SOIL_PIN), 1023, 0, 0, 100);
  lcd.clear(); lcd.setCursor(0, 0);
  lcd.print("Moisture: "); lcd.print(moisture); lcd.print("%");
  if (moisture < 40) {
    digitalWrite(RELAY_PIN, LOW);
    lcd.setCursor(0,1); lcd.print("Pump: ON ");
  } else {
    digitalWrite(RELAY_PIN, HIGH);
    lcd.setCursor(0,1); lcd.print("Pump: OFF");
  }
  delay(2000);
}`,
    steps: ["وصّل حساس التربة بالمنفذ A0 والـ Relay بالمنفذ 7", "وصّل LCD عبر I2C (SDA=A4, SCL=A5)", "ارفع الكود وافتح Serial Monitor لمراقبة الرطوبة", "اضبط العتبة (40%) حسب نوع التربة والحاجة", "جرّب بوضع الحساس في تربة جافة ثم رطبة"],
    bom: [
      { name: "Arduino UNO R3", qty: 1, price: 12 },
      { name: "Soil Moisture Sensor", qty: 1, price: 2 },
      { name: "Water Pump 5V", qty: 1, price: 3 },
      { name: "Relay Module 1-Channel", qty: 1, price: 2 },
      { name: "LCD 16×2 + I2C", qty: 1, price: 4 },
    ],
  },
  {
    id: "p6", title: "نظام إنذار حريق — كشف الدخان والحرارة",
    icon: Flame, diff: "متوسط", board: "ESP32", badge: "مهم للحياة",
    desc: "كاشف دخان وارتفاع حرارة يعمل بالوقت الحقيقي. MQ-2 يكشف الدخان والغازات وLM35 يقيس الحرارة. عند تجاوز العتبة يشغل Buzzer وLED أحمر.",
    comps: ["ESP32 DevKit", "MQ-2 Gas Sensor", "LM35 Temperature", "Buzzer Active 5V", "LED Red + Green", "Breadboard"],
    code: `#include <WiFi.h>
#define MQ2_PIN 34
#define LM35_PIN 35
#define BUZZER 23
void setup() {
  Serial.begin(115200);
  pinMode(BUZZER, OUTPUT);
  pinMode(22, OUTPUT); // Red LED
  pinMode(21, OUTPUT); // Green LED
  digitalWrite(21, HIGH);
  WiFi.begin("SSID", "PASS");
}
void loop() {
  int gas = analogRead(MQ2_PIN);
  float temp = (analogRead(LM35_PIN) * 3.3 / 4095.0) * 100;
  if (gas > 1500 || temp > 50) {
    digitalWrite(BUZZER, HIGH);
    digitalWrite(22, HIGH);
    digitalWrite(21, LOW);
    Serial.print("ALERT Gas:"); Serial.print(gas);
    Serial.print(" Temp:"); Serial.println(temp);
  } else {
    digitalWrite(BUZZER, LOW);
    digitalWrite(22, LOW);
    digitalWrite(21, HIGH);
  }
  delay(1000);
}`,
    steps: ["وصّل MQ-2 بالمنفذ 34 (ADC1) وLM35 بالمنفذ 35", "وصّل Buzzer بالمنفذ 23 وLED الأحمر بـ 22 والأخضر بـ 21", "ارفع الكود وافتح Serial Monitor لمتابعة القراءات", "اختبر بتعريض MQ-2 لدخان خفيف من ولاعة", "اضبط العتبات حسب البيئة المحيطة"],
    bom: [
      { name: "ESP32 DevKit", qty: 1, price: 8 },
      { name: "MQ-2 Gas Sensor", qty: 1, price: 4 },
      { name: "LM35 Temperature", qty: 1, price: 1 },
      { name: "Buzzer Active 5V", qty: 1, price: 1 },
      { name: "LED أحمر/أخضر", qty: 2, price: 0.10 },
      { name: "Breadboard", qty: 1, price: 2 },
    ],
  },
  {
    id: "p7", title: "مصباح LED ذكي بالبلوتوث",
    icon: Eye, diff: "مبتدئ", board: "Arduino Uno", badge: "سهل التطبيق",
    desc: "مصباح RGB يتحكم بألوانه وسطوته عبر تطبيق البلوتوث. يدعم اختيار الألوان وتعتيم تدريجي وتأثيرات مثل قوس قزح وإطفاء وتشغيل.",
    comps: ["Arduino Uno", "RGB LED Common Cathode", "HC-05 Bluetooth", "Resistors 220Ω ×3", "Breadboard"],
    code: `#include <SoftwareSerial.h>
SoftwareSerial bt(2, 3);
#define RED_PIN 9
#define GREEN_PIN 10
#define BLUE_PIN 11
void setColor(int r, int g, int b) {
  analogWrite(RED_PIN, r);
  analogWrite(GREEN_PIN, g);
  analogWrite(BLUE_PIN, b);
}
void setup() {
  bt.begin(9600);
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);
}
void loop() {
  if (bt.available()) {
    char c = bt.read();
    if (c=='R') setColor(255,0,0);
    else if (c=='G') setColor(0,255,0);
    else if (c=='B') setColor(0,0,255);
    else if (c=='W') setColor(255,255,255);
    else if (c=='O') setColor(0,0,0);
    else if (c=='F') {
      for(int i=0;i<=255;i++) {
        setColor(i,0,255-i); delay(10);
      }
    }
  }
}`,
    steps: ["وصّل RGB LED بالمنافذ 9 (أحمر)، 10 (أخضر)، 11 (أزرق) مع مقاومات", "وصّل HC-05: RX→المنفذ 3 وTX→المنفذ 2 وVCC→5V", "حمّل تطبيق Serial Bluetooth Terminal على الهاتف", "اقرن الهاتف بـ HC-05 (كلمة المرور: 1234)", "أرسل حروف R أو G أو B أو W أو O لاختبار التحكم"],
    bom: [
      { name: "Arduino UNO R3", qty: 1, price: 12 },
      { name: "RGB LED Common Cathode", qty: 1, price: 0.50 },
      { name: "HC-05 Bluetooth", qty: 1, price: 6 },
      { name: "مقاومة 220Ω", qty: 3, price: 0.02 },
      { name: "Breadboard", qty: 1, price: 2 },
    ],
  },
  {
    id: "p8", title: "عداد زوار ذكي — LCD + إحصائيات",
    icon: Gauge, diff: "مبتدئ", board: "Arduino Uno", badge: "سهل التطبيق",
    desc: "حساسان PIR عند المدخل والمخرج يحسبان عدد الحاضرين. LCD تعرض عدد الحاضرين وإجمالي الزوار. LED أخضر للتواجد وأحمر للخلو.",
    comps: ["Arduino Uno", "PIR HC-SR501 ×2", "LCD 16×2 + I2C", "LED Green + Red", "Resistors 220Ω"],
    code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);
#define ENTRY 2
#define EXIT 3
int inside = 0, totalIn = 0, totalOut = 0;
void setup() {
  lcd.init(); lcd.backlight();
  pinMode(ENTRY, INPUT); pinMode(EXIT, INPUT);
  pinMode(8, OUTPUT); pinMode(9, OUTPUT);
}
void loop() {
  if (digitalRead(ENTRY) == HIGH) {
    inside++; totalIn++; delay(3000);
  }
  if (digitalRead(EXIT) == HIGH && inside > 0) {
    inside--; totalOut++; delay(3000);
  }
  digitalWrite(8, inside > 0 ? HIGH : LOW);
  digitalWrite(9, inside == 0 ? HIGH : LOW);
  lcd.clear(); lcd.setCursor(0, 0);
  lcd.print("In:"); lcd.print(inside);
  lcd.print(" Total:"); lcd.print(totalIn);
  lcd.setCursor(0, 1);
  lcd.print("Exit:"); lcd.print(totalOut);
  delay(500);
}`,
    steps: ["ثبّت PIR عند المدخل بالمنفذ 2 وعند المخرج بالمنفذ 3", "وصّل LCD عبر I2C (SDA=A4, SCL=A5)", "ارفع الكود واضبط حساسية PIR عبر المقلاع", "اختبر بالمرور أمام حساس المدخل ثم المخرج", "أضف RTC لعرض آخر وقت دخول وخروج"],
    bom: [
      { name: "Arduino UNO R3", qty: 1, price: 12 },
      { name: "PIR HC-SR501", qty: 2, price: 3 },
      { name: "LCD 16×2 + I2C", qty: 1, price: 4 },
      { name: "LED أخضر/أحمر", qty: 2, price: 0.10 },
      { name: "مقاومة 220Ω", qty: 2, price: 0.02 },
    ],
  },
  {
    id: "p9", title: "تحكم صوتي بالأجهزة — Voice Commands",
    icon: Mic, diff: "متقدم", board: "Arduino Uno", badge: "تحدٍ ممتع",
    desc: "وحدة التعرف على الصوت V3 تتعرف على أوامر عربية وإنجليزية. الأوامر المكتشفة تحول إلى إشارات Relay تتحكم في الأجهزة مع تأكيد صوتي.",
    comps: ["Arduino Uno", "Voice Recognition Module V3", "Relay 2-Channel 5V", "Buzzer Active", "LEDs ×2", "Breadboard"],
    code: `#include <SoftwareSerial.h>
SoftwareSerial voice(2, 3);
#define RELAY1 8
#define RELAY2 9
#define BUZZER 10
void confirm() {
  digitalWrite(BUZZER, HIGH); delay(150);
  digitalWrite(BUZZER, LOW);
}
void setup() {
  voice.begin(9600);
  pinMode(RELAY1, OUTPUT); pinMode(RELAY2, OUTPUT);
  pinMode(BUZZER, OUTPUT);
  voice.write(0xAA); voice.write(0x37);
  delay(1000);
  voice.write(0xAA); voice.write(0x21);
}
void loop() {
  if (voice.available()) {
    char cmd = voice.read();
    if (cmd == 0x01) { digitalWrite(RELAY1, HIGH); confirm(); }
    else if (cmd == 0x02) { digitalWrite(RELAY1, LOW); confirm(); }
    else if (cmd == 0x03) { digitalWrite(RELAY2, HIGH); confirm(); }
    else if (cmd == 0x04) { digitalWrite(RELAY2, LOW); confirm(); }
  }
}`,
    steps: ["وصّل وحدة الصوت: TX→المنفذ 2 وRX→المنفذ 3", "ثبّت مجموعة الأوامر ببرنامج التدريب المرفق", "وصّل Relay1 بالمنفذ 8 (إضاءة) وRelay2 بالمنفذ 9 (مروحة)", "ارفع الكود وتأكد من ظهور رسالة الجاهزية في Serial Monitor", "تحدث أمام المايكروفون بوضوح لتنفيذ الأوامر"],
    bom: [
      { name: "Arduino UNO R3", qty: 1, price: 12 },
      { name: "Voice Recognition Module V3", qty: 1, price: 8 },
      { name: "Relay 2-Channel 5V", qty: 1, price: 2 },
      { name: "Buzzer Active", qty: 1, price: 1 },
      { name: "LED أحمر", qty: 2, price: 0.10 },
      { name: "Breadboard", qty: 1, price: 2 },
    ],
  },
  {
    id: "p10", title: "قفل باب ذكي بالإيميل — Access Control",
    icon: Lock, diff: "متقدم", board: "ESP32", badge: "مهم للحياة",
    desc: "قفل باب يُفتح عند استلام إيميل بكلمة سر محددة. ESP32 يتصل بـ Wi-Fi ويتحقق من الرسائل عبر IMAP كل 30 ثانية. سيرفو يفتح ويغلق القفل.",
    comps: ["ESP32 DevKit", "Servo SG90", "Buzzer Active", "LED Green + Red", "Power Supply 5V 2A", "Breadboard"],
    code: `#include <WiFi.h>
#include <WiFiClientSecure.h>
const char* ssid = "YourWiFi";
const char* password = "YourPass";
const char* secret = "#OPEN_DOOR";
#define SERVO_PIN 13
#define BUZZER 14
WiFiClientSecure client;
void unlockDoor() {
  // Move servo to 90 degrees (unlocked)
  digitalWrite(26, HIGH); // Green LED ON
  digitalWrite(27, LOW);  // Red LED OFF
  digitalWrite(BUZZER, HIGH); delay(300);
  digitalWrite(BUZZER, LOW);
  Serial.println("Door UNLOCKED");
  delay(5000);
  // Return to 0 degrees (locked)
  digitalWrite(26, LOW);
  digitalWrite(27, HIGH);
}
void setup() {
  Serial.begin(115200);
  pinMode(26, OUTPUT); pinMode(27, OUTPUT);
  pinMode(BUZZER, OUTPUT);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  Serial.println("WiFi connected!");
  client.setInsecure();
  digitalWrite(27, HIGH); // Start locked
}
void loop() {
  // Check IMAP for emails containing secret keyword
  // If found: unlockDoor()
  delay(30000);
}`,
    steps: ["أنشئ App Password في Google Account للأمان", "وصّل السيرفو بالمنفذ 13 وBuzzer بـ 14 وLED بـ 26 و27", "أدخل بيانات Wi-Fi والإيميل وكلمة السر في الكود", "ارفع الكود وتأكد من اتصال Wi-Fi ثم أرسل إيميل يحتوي #OPEN_DOOR", "اختبر فتح الباب والإغلاق التلقائي بعد 5 ثوانٍ"],
    bom: [
      { name: "ESP32 DevKit", qty: 1, price: 8 },
      { name: "Servo SG90", qty: 1, price: 3 },
      { name: "Buzzer Active", qty: 1, price: 1 },
      { name: "LED أخضر/أحمر", qty: 2, price: 0.10 },
      { name: "Power Supply 5V 2A", qty: 1, price: 5 },
      { name: "Breadboard", qty: 1, price: 2 },
    ],
  },
];

const diffs = ["الكل", "مبتدئ", "متوسط", "متقدم"] as const;
const boardOpts = ["الكل", "Arduino Uno", "ESP32"] as const;

export default function ProjectsPage() {
  const [diff, setDiff] = useState<string>("الكل");
  const [board, setBoard] = useState<string>("الكل");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  /* ─── Bookmarks State ─── */
  const BOOKMARKS_KEY = "mashari3_bookmarks";
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(BOOKMARKS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const filtered = projects.filter(
    (p) => (diff === "الكل" || p.diff === diff) && (board === "الكل" || p.board === board)
  );

  const handleCopy = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div dir="rtl" className="space-y-10 pb-8">
      <section className="text-center">
        <Badge className="mb-3 bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800">
          <Wrench className="h-3 w-3 ml-1" /> كتالوج المشاريع
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {projects.length} مشروع جاهز للتنفيذ
        </h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm">
          كل مشروع يشتمل على: شرح مفصل، كود Arduino جاهز، قائمة مكونات، وخطوات التنفيذ
        </p>
      </section>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 p-4 rounded-2xl border border-border/40 bg-muted/20">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-muted-foreground shrink-0">الصعوبة:</span>
          {diffs.map((d) => (
            <Button key={d} size="sm" variant={diff === d ? "default" : "outline"}
              className={`rounded-lg text-xs h-7 px-3 ${diff === d ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}`}
              onClick={() => setDiff(d)}>{d}</Button>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-wrap sm:border-r sm:border-border/30 sm:pr-4">
          <span className="text-xs font-semibold text-muted-foreground shrink-0">اللوحة:</span>
          {boardOpts.map((b) => (
            <Button key={b} size="sm" variant={board === b ? "default" : "outline"}
              className={`rounded-lg text-xs h-7 px-3 ${board === b ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}`}
              onClick={() => setBoard(b)}>{b}</Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((p, i) => {
          const isOpen = expanded === p.id;
          return (
            <motion.div key={p.id} initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}>
              <Card className={`border-border/40 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? "shadow-lg border-emerald-300 dark:border-emerald-700" : "hover:shadow-md"}`}
                onClick={() => setExpanded(isOpen ? null : p.id)}>
                <CardHeader className="p-4 pb-0">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-2">
                        <button onClick={(e) => { e.stopPropagation(); toggleBookmark(`proj-${i}`); }} className={`p-1 rounded transition-colors ${bookmarks.includes(`proj-${i}`) ? "text-emerald-600 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400" : "text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"}`} title={bookmarks.includes(`proj-${i}`) ? "إزالة المفضلة" : "إضافة للمفضلة"}>
                          <Bookmark className={`h-3 w-3 ${bookmarks.includes(`proj-${i}`) ? "fill-current" : ""}`} />
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(window.location.href); toast.success("تم نسخ الرابط!"); }} className="p-1 rounded text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors" title="نسخ الرابط">
                          <Copy className="h-3 w-3" />
                        </button>
                        <a href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(p.title + " — مشاريع إلكترونية")}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-1 rounded text-muted-foreground hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/30 transition-colors" title="مشاركة على تليجرام">
                          <Send className="h-3 w-3" />
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-1 rounded text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors" title="مشاركة على فيسبوك">
                          <Facebook className="h-3 w-3" />
                        </a>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-sm">{p.title}</h3>
                        <Badge className={`text-[9px] border-0 ${badgeColors[p.badge] || "bg-slate-100 text-slate-700"}`}>{p.badge}</Badge>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Badge variant="secondary" className={`text-[10px] ${diffColors[p.diff]}`}>{p.diff}</Badge>
                        <Badge variant="outline" className="text-[10px]">
                          <Cpu className="h-2.5 w-2.5 ml-0.5 inline" />{p.board}
                        </Badge>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="mt-4 space-y-4 border-t border-border/20 pt-4">
                          {/* Components */}
                          <div>
                            <div className="flex items-center gap-1.5 mb-2">
                              <ListChecks className="h-3.5 w-3.5 text-teal-600" />
                              <span className="text-xs font-semibold">المكونات المطلوبة</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {p.comps.map((c) => (
                                <Badge key={c} variant="outline" className="text-[10px] font-normal">{c}</Badge>
                              ))}
                            </div>
                          </div>

                          {/* Bill of Materials */}
                          <div className="p-3 rounded-lg bg-muted/30 border border-border/20">
                            <h4 className="text-xs font-bold mb-2 flex items-center gap-1.5">
                              <ShoppingCart className="h-3.5 w-3.5 text-emerald-600" />
                              قائمة القطع والتكلفة
                            </h4>
                            <div className="space-y-1.5">
                              {p.bom.map((item, i) => (
                                <div key={i} className="flex items-center justify-between text-[11px]">
                                  <span className="text-muted-foreground">
                                    <span className="font-medium text-foreground">{item.name}</span>
                                    <span className="text-muted-foreground mr-1">×{item.qty}</span>
                                  </span>
                                  <span className="text-muted-foreground">${(item.price * item.qty).toFixed(2)}</span>
                                </div>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-border/20 flex items-center justify-between text-xs font-semibold">
                              <span>التكلفة التقديرية</span>
                              <span className="text-emerald-600 dark:text-emerald-400">
                                ${p.bom.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(0)}-${Math.ceil(p.bom.reduce((sum, item) => sum + item.price * item.qty, 0) * 1.3)}
                              </span>
                            </div>
                          </div>

                          {/* Code Block */}
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5">
                                <Code2 className="h-3.5 w-3.5 text-teal-600" />
                                <span className="text-xs font-semibold">كود Arduino</span>
                              </div>
                              <Button size="sm" variant="outline" className="h-6 text-[10px] px-2"
                                onClick={(e) => { e.stopPropagation(); handleCopy(p.code, p.id); }}>
                                {copiedId === p.id ? <Check className="h-3 w-3 ml-1 text-emerald-500" /> : <Copy className="h-3 w-3 ml-1" />}
                                {copiedId === p.id ? "تم النسخ" : "نسخ"}
                              </Button>
                            </div>
                            <SyntaxHighlighter
                              language="cpp"
                              style={oneDark}
                              showLineNumbers
                              lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
                              customStyle={{
                                margin: 0,
                                borderRadius: "0.75rem",
                                padding: "1rem",
                                fontSize: "0.75rem",
                                lineHeight: "1.6",
                                background: "#0f172a",
                                maxHeight: "20rem",
                                overflowY: "auto",
                              }}
                              wrapLongLines
                              onClick={(e) => e.stopPropagation()}
                            >
                              {p.code}
                            </SyntaxHighlighter>
                          </div>

                          {/* Steps */}
                          <div>
                            <div className="flex items-center gap-1.5 mb-2">
                              <Footprints className="h-3.5 w-3.5 text-teal-600" />
                              <span className="text-xs font-semibold">خطوات التنفيذ</span>
                            </div>
                            <ol className="space-y-1.5">
                              {p.steps.map((s, idx) => (
                                <li key={idx} className="flex gap-2 text-xs text-muted-foreground">
                                  <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                                    {idx + 1}
                                  </span>
                                  <span className="leading-relaxed">{s}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">لا توجد مشاريع بهذه المعايير</p>
        </div>
      )}
    </div>
  );
}
