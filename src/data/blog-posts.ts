export interface BlogPost {
  slug: string;
  title: { ar: string; en: string };
  excerpt: { ar: string; en: string };
  date: string;
  author: { ar: string; en: string };
  lang: "ar" | "en" | "both";
  readTime: { ar: string; en: string };
  category: string;
  color: string;
  content: { ar: string; en: string };
  codeBlocks: { language: string; code: string; captionAr: string; captionEn: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-esp32-better-than-arduino",
    title: { ar: "لماذا ESP32 أفضل من Arduino؟", en: "Why ESP32 is Better Than Arduino?" },
    excerpt: {
      ar: "مقارنة شاملة بين ESP32 و Arduino: من حيث القوة المعالجية، الاتصال، والتكلفة. اكتشف لماذا يختار مهندسو IoT ESP32 للمشاريع الحقيقية.",
      en: "A comprehensive comparison between ESP32 and Arduino: processing power, connectivity, and cost. Discover why IoT engineers choose ESP32 for real projects.",
    },
    date: "2025-06-15",
    author: { ar: "محمد عقيلي", en: "Mohammad Aqli" },
    lang: "both",
    readTime: { ar: "5 دقائق", en: "5 min read" },
    category: "hardware",
    color: "#00ff66",
    codeBlocks: [
      {
        language: "cpp",
        code: `// ESP32 WiFi Connection Example
#include <WiFi.h>

const char* ssid = "YourNetwork";
const char* password = "YourPassword";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("\\nConnected to WiFi!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}`,
        captionAr: "مثال: اتصال ESP32 بشبكة Wi-Fi",
        captionEn: "Example: ESP32 WiFi connection",
      },
      {
        language: "cpp",
        code: `// Arduino — لا يدعم Wi-Fi أصلاً
// يجب إضافة shield خارجي
#include <SPI.h>
#include <WiFiNINA.h>

char ssid[] = "YourNetwork";
char pass[] = "YourPassword";
int status = WL_IDLE_STATUS;

void setup() {
  Serial.begin(9600);
  
  // التحقق من وجود WiFi Shield
  if (WiFi.status() == WL_NO_MODULE) {
    Serial.println("WiFi Shield not found!");
    while (true);
  }
  
  while (status != WL_CONNECTED) {
    status = WiFi.begin(ssid, pass);
    delay(5000);
  }
}`,
        captionAr: "مقارنة: Arduino يحتاج WiFi Shield خارجي",
        captionEn: "Comparison: Arduino needs external WiFi Shield",
      },
    ],
    content: {
      ar: `## مقدمة

في عالم إنترنت الأشياء (IoT)، يُعد اختيار المتحكم المناسب الخطوة الأولى والأهم. سنقارن اليوم بين **ESP32** و **Arduino** من عدة جوانب عملية.

## القوة المعالجية

**ESP32** يعمل بمعالج **Tensilica Xtensa LX6** مزدوج النواة بسرعة **240 MHz** مع **520 KB SRAM**.

في المقابل، **Arduino UNO** يعمل بمعالج **ATmega328P** أحادي النواة بسرعة **16 MHz** فقط مع **2 KB SRAM**.

هذا يعني أن ESP32 أسرع **15 مرة** من Arduino ويمتلك ذاكرة **260 ضعف**!

## الاتصال الافتراضي

هذه أكبر ميزة لـ ESP32:

- **Wi-Fi 802.11 b/g/n** مدمج
- **Bluetooth 4.2 + BLE** مدمج
- لا حاجة لأي أجهزة إضافية

Arduino يحتاج إلى أجهزة shield خارجية تكلف إضافية وتأخذ مساحة.

## التكلفة

| الميزة | ESP32 | Arduino UNO |
|--------|-------|-------------|
| السعر | ~$4-8 | ~$20-25 |
| Wi-Fi | مدمج | يحتاج Shield (~$15) |
| Bluetooth | مدمج | لا يدعم |
| GPIO | 34 pin | 14 pin |
| ADC | 18 channel | 6 channel |

## الخلاصة

للمشاريع الحقيقية في إنترنت الأشياء، **ESP32** هو الخيار الأفضل بلا منازع. تكلفته أقل، قدراته أعلى بكثير، ويدعم الاتصال بشبكة الإنترنت بشكل مدمج.`,

      en: `## Introduction

In the IoT world, choosing the right microcontroller is the first and most critical step. Today we compare **ESP32** and **Arduino** from several practical perspectives.

## Processing Power

**ESP32** runs on a **Tensilica Xtensa LX6** dual-core processor at **240 MHz** with **520 KB SRAM**.

In contrast, **Arduino UNO** runs on an **ATmega328P** single-core at just **16 MHz** with **2 KB SRAM**.

This means ESP32 is **15 times faster** than Arduino with **260x more memory**!

## Built-in Connectivity

This is ESP32's biggest advantage:

- **Wi-Fi 802.11 b/g/n** built-in
- **Bluetooth 4.2 + BLE** built-in
- No additional hardware needed

Arduino requires external shields that add cost and space.

## Cost Comparison

| Feature | ESP32 | Arduino UNO |
|---------|-------|-------------|
| Price | ~$4-8 | ~$20-25 |
| Wi-Fi | Built-in | Needs Shield (~$15) |
| Bluetooth | Built-in | Not supported |
| GPIO | 34 pins | 14 pins |
| ADC | 18 channels | 6 channels |

## Conclusion

For real IoT projects, **ESP32** is the clear winner. Lower cost, significantly better capabilities, and built-in internet connectivity.`,
    },
  },
  {
    slug: "how-we-built-smart-safe",
    title: { ar: "كيف بنينا الخزنة الذكية", en: "How We Built the Smart Safe System" },
    excerpt: {
      ar: "رصة تقنية مفصلة عن مشروع الخزنة الذكية: من الفكرة إلى التنفيذ. المكونات، البرمجيات، التحديات، والحلول.",
      en: "A detailed technical breakdown of our Smart Safe project: from concept to implementation. Components, software, challenges, and solutions.",
    },
    date: "2025-06-10",
    author: { ar: "عمار مشارقة", en: "Ammar Masharqa" },
    lang: "both",
    readTime: { ar: "7 دقائق", en: "7 min read" },
    category: "project",
    color: "#ffab00",
    codeBlocks: [
      {
        language: "cpp",
        code: `// Smart Safe - PIN Verification Logic
#include <Keypad.h>
#include <Servo.h>

const byte ROWS = 4;
const byte COLS = 4;
char keys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};
byte rowPins[ROWS] = {9, 8, 7, 6};
byte colPins[COLS] = {5, 4, 3, 2};

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);
Servo lockServo;

const char* CORRECT_PIN = "1234";
char enteredPin[5] = "";
int pinIndex = 0;
int failedAttempts = 0;

void setup() {
  Serial.begin(115200);
  lockServo.attach(10);
  lockServo.write(0); // Locked position
}

void loop() {
  char key = keypad.getKey();
  
  if (key) {
    enteredPin[pinIndex++] = key;
    enteredPin[pinIndex] = '\\0';
    
    if (pinIndex == 4) {
      if (strcmp(enteredPin, CORRECT_PIN) == 0) {
        unlockSafe();
        failedAttempts = 0;
      } else {
        failedAttempts++;
        if (failedAttempts >= 3) {
          triggerAlarm();
        }
      }
      pinIndex = 0;
    }
  }
}

void unlockSafe() {
  lockServo.write(90); // Unlocked position
  Serial.println("SAFE UNLOCKED");
  delay(5000);         // Auto-lock after 5s
  lockServo.write(0);  // Re-lock
}

void triggerAlarm() {
  Serial.println("ALARM! 3 failed attempts");
  // Activate buzzer and send Firebase notification
}`,
        captionAr: "الكود الأساسي للخزنة: التحقق من PIN والتحكم بالقفل",
        captionEn: "Core safe code: PIN verification and lock control",
      },
    ],
    content: {
      ar: `## الفكرة

كانت فكرة الخزنة الذكية ناتجة عن حاجة حقيقية: عملاء يريدون حماية أشيائهم الثمينة بنظام أمان موثوق يعمل **بدون إنترنت**.

## المتطلبات

- قفل رقمي بـ 4 أرقام
- تنبيه عند محاولات الاختراق
- يعمل بدون إنترنت (مبدأنا الأساسي)
- تتبع جميع محاولات الفتح
- تكلفة منخفضة نسبياً

## المكونات المستخدمة

- **ESP32** — المتحكم الرئيسي
- **لوحة مفاتيح 4×4** — لإدخال PIN
- **Servo Motor** — للتحكم بالقفل الميكانيكي
- **Buzzer** — للإنذار
- **PIR Sensor** — لكشف الحركة
- **DHT22** — لمراقبة البيئة داخل الخزنة

## التحديات والحلول

### التحدي 1: الأمان المادي
الحل: استخدام خوارزمية **Anti-Freeze** تمنع تجميد النظام وضمان عمل القفل دائماً.

### التحدي 2: التنبيهات
الحل: الطبقة الأولى — Buzzer محلي (تعمل بدون إنترنت). الطبقة الثانية — إشعار Firebase عند توفر الإنترنت.

### التحدي 3: استهلاك الطاقة
الحل: وضع **Deep Sleep** بين عمليات الفحص مع الاستيقاظ عند لمس لوحة المفاتيح.

## النتيجة

نظام أمان متكامل يعمل 24/7 بتكلفة أقل من **$30** في القطع الإلكترونية.`,

      en: `## The Concept

The Smart Safe idea came from a real need: clients wanting to protect their valuables with a reliable security system that works **without internet**.

## Requirements

- 4-digit PIN lock
- Alerts on intrusion attempts
- Works without internet (our core principle)
- Track all unlock attempts
- Relatively low cost

## Components Used

- **ESP32** — Main controller
- **4x4 Keypad** — PIN input
- **Servo Motor** — Mechanical lock control
- **Buzzer** — Alarm
- **PIR Sensor** — Motion detection
- **DHT22** — Environmental monitoring inside safe

## Challenges & Solutions

### Challenge 1: Physical Security
Solution: **Anti-Freeze** algorithm preventing system freeze and ensuring lock always works.

### Challenge 2: Alerts
Solution: Layer 1 — Local Buzzer (works without internet). Layer 2 — Firebase notification when internet is available.

### Challenge 3: Power Consumption
Solution: **Deep Sleep** mode between checks with wake-up on keypad touch.

## Result

A complete security system running 24/7 at a cost of less than **$30** in electronic components.`,
    },
  },
  {
    slug: "iot-communication-protocols",
    title: { ar: "بروتوكولات الاتصال الأساسية في IoT", en: "Essential IoT Communication Protocols" },
    excerpt: {
      ar: "دليل شامل لأهم بروتوكولات الاتصال في إنترنت الأشياء: MQTT, HTTP, WebSocket, UART, SPI, I2C. متى نستخدم كل بروتوكول ولماذا؟",
      en: "A comprehensive guide to the most important IoT communication protocols: MQTT, HTTP, WebSocket, UART, SPI, I2C. When to use each and why?",
    },
    date: "2025-06-05",
    author: { ar: "محمد عقيلي", en: "Mohammad Aqli" },
    lang: "both",
    readTime: { ar: "6 دقائق", en: "6 min read" },
    category: "tutorial",
    color: "#00e5ff",
    codeBlocks: [
      {
        language: "cpp",
        code: `// MQTT Publish Example (ESP32)
#include <WiFi.h>
#include <PubSubClient.h>

const char* mqtt_server = "broker.hivemq.com";
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  WiFi.begin("SSID", "PASSWORD");
  while (WiFi.status() != WL_CONNECTED) delay(500);
  
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void callback(char* topic, byte* payload, unsigned int length) {
  String message = "";
  for (unsigned int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  Serial.print("Message received [");
  Serial.print(topic);
  Serial.print("]: ");
  Serial.println(message);
}

void loop() {
  if (!client.connected()) {
    client.connect("ESP32Client");
    client.subscribe("smart-home/commands");
  }
  
  // Publish sensor data every 5 seconds
  static unsigned long lastMsg = 0;
  if (millis() - lastMsg > 5000) {
    lastMsg = millis();
    float temp = readTemperature();
    client.publish("smart-home/temperature", String(temp).c_str());
  }
  
  client.loop();
}`,
        captionAr: "مثال: نشر بيانات الحساسات عبر MQTT",
        captionEn: "Example: Publishing sensor data via MQTT",
      },
    ],
    content: {
      ar: `## مقدمة

في مشاريع إنترنت الأشياء، اختيار بروتوكول الاتصال الصحيح يحدد أداء وموثوقية النظام بالكامل. سنستعرض أهم البروتوكولات مع استخداماتها.

## 1. MQTT (Message Queuing Telemetry Transport)

**الأفضل لـ:** نقل البيانات الخفيفة بين الأجهزة والسحابة

- خفيف جداً (2 بايت للرأس فقط)
- يدعم Publish/Subscribe
- مثالي للشبكات ذات النطاق المحدود
- جودة خدمة (QoS) بثلاث مستويات
- نستخدمه في جميع مشاريعنا للتواصل مع Firebase

## 2. HTTP/HTTPS

**الأفضل لـ:** واجهات API البسيطة والتحقق من البيانات

- بروتوكول مألوف وسهل الاستخدام
- يستهلك ذاكرة أكبر من MQTT
- مناسب للطلبات المتقطعة
- نستخدمه لتحديثات OTA ولوحات المراقبة

## 3. WebSocket

**الأفضل لـ:** التحكم الحي والمزامنة الفورية

- اتصال ثنائي الاتجاه
- منخفض التأخير
- مثالي لوحات المراقبة الحية
- نستخدمه في لوحة تحكم المبنى الذكي

## 4. UART (Serial)

**الأفضل لـ:** التواصل بين المتحكمات على نفس اللوحة

- بسيط وفعال بين متحكمين
- مسافة قصيرة (عادة < 1 متر)
- نستخدمه لربط Arduino Mega بـ ESP32 في مشروع القاعة

## 5. SPI و I2C

**الأفضل لـ:** ربط الحساسات والشاشات بالمتحكم

- SPI: سريع (حتى 80 MHz)
- I2C: بسيط، سلكان فقط
- نستخدم I2C لشاشات OLED و SPI لبطاقات SD

## متى نستخدم ماذا؟

| السيناريو | البروتوكول |
|-----------|-----------|
| جهاز ← سحابة | MQTT أو HTTP |
| لوحة تحكم حية | WebSocket |
| متحكم ← متحكم | UART |
| حساسات على اللوحة | I2C أو SPI |
| تحديثات OTA | HTTPS |`,

      en: `## Introduction

In IoT projects, choosing the right communication protocol determines the performance and reliability of the entire system. Let's review the most important protocols and their uses.

## 1. MQTT (Message Queuing Telemetry Transport)

**Best for:** Lightweight data transfer between devices and cloud

- Very lightweight (2 bytes header only)
- Supports Publish/Subscribe pattern
- Ideal for bandwidth-limited networks
- Three Quality of Service (QoS) levels
- We use it in all our projects for Firebase communication

## 2. HTTP/HTTPS

**Best for:** Simple APIs and data verification

- Familiar and easy to use protocol
- Uses more memory than MQTT
- Suitable for intermittent requests
- We use it for OTA updates and monitoring dashboards

## 3. WebSocket

**Best for:** Real-time control and instant synchronization

- Bidirectional connection
- Low latency
- Ideal for live dashboards
- We use it in the smart building control panel

## 4. UART (Serial)

**Best for:** Communication between controllers on the same board

- Simple and efficient between two MCUs
- Short distance (typically < 1 meter)
- We use it to connect Arduino Mega to ESP32 in the event hall project

## 5. SPI and I2C

**Best for:** Connecting sensors and displays to the controller

- SPI: Fast (up to 80 MHz)
- I2C: Simple, only two wires
- We use I2C for OLED displays and SPI for SD cards

## When to Use What?

| Scenario | Protocol |
|----------|----------|
| Device → Cloud | MQTT or HTTP |
| Live control panel | WebSocket |
| MCU → MCU | UART |
| Sensors on board | I2C or SPI |
| OTA updates | HTTPS |`,
    },
  },
];
