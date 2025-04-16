import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ログ出力用の関数
const log = (message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  if (data) {
    console.log(JSON.stringify(data, null, 2));
  }
};

export async function POST(request: Request) {
  log('=== メール送信処理開始 ===');
  
  try {
    // リクエストの内容をログに出力
    log('リクエストヘッダー:', Object.fromEntries(request.headers.entries()));
    
    const body = await request.json();
    log('リクエストボディ:', body);

    const { name, company, email, phone, service, message } = body;

    // バリデーション
    if (!email || !message) {
      log('バリデーションエラー: メールアドレスとメッセージは必須です');
      return NextResponse.json(
        { error: 'メールアドレスとメッセージは必須です' },
        { status: 400 }
      );
    }

    // SMTP設定の確認
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
    };

    log('SMTP設定:', smtpConfig);

    // 設定の検証
    if (!smtpConfig.host || !smtpConfig.port || !smtpConfig.user || !smtpConfig.from || !smtpConfig.to) {
      log('SMTP設定エラー: 必須設定が不足しています');
      return NextResponse.json(
        { error: 'メールサーバーの設定が正しくありません' },
        { status: 500 }
      );
    }

    // SMTPトランスポーターの設定
    log('SMTPトランスポーターを設定中...');
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: Number(smtpConfig.port),
      secure: false,
      auth: {
        user: smtpConfig.user,
        pass: process.env.SMTP_PASSWORD,
      },
      debug: true,
      logger: true,
    });

    // 接続テスト
    log('SMTP接続テストを実行中...');
    try {
      await transporter.verify();
      log('SMTP接続テスト成功');
    } catch (error) {
      log('SMTP接続エラー:', error);
      return NextResponse.json(
        { error: 'メールサーバーへの接続に失敗しました' },
        { status: 500 }
      );
    }

    // メール送信
    log('メール送信を開始...');
    try {
      const adminMail = {
        from: smtpConfig.from,
        to: smtpConfig.to,
        subject: `【お問い合わせ】${email}様より`,
        text: `
■お問い合わせ内容の詳細■

メールアドレス：${email}
お名前：${name || '未入力'}
会社名：${company || '未入力'}
電話番号：${phone || '未入力'}
ご相談内容：${service || '未選択'}

■お問い合わせ内容■
${message}
        `,
      };

      const autoReplyMail = {
        from: smtpConfig.from,
        to: email,
        subject: '【miitaso】お問い合わせありがとうございます',
        text: `
${name || 'お客様'} 様

この度は、miitasoにお問い合わせいただき、誠にありがとうございます。
お問い合わせ内容を確認させていただきました。

■お問い合わせ内容の詳細■
メールアドレス：${email}
お名前：${name || '未入力'}
会社名：${company || '未入力'}
電話番号：${phone || '未入力'}
ご相談内容：${service || '未選択'}

■お問い合わせ内容■
${message}

担当者より3日以内にご連絡させていただきます。
今しばらくお待ちくださいませ。

ご不明な点がございましたら、お気軽にお問い合わせください。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
株式会社miitaso
〒104-0061 東京都中央区銀座1丁目12番4号N&E BLD.6F
TEL: 090-6266-0207
Email: info@miitaso.com
URL: https://miitaso.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        `,
      };

      log('管理者宛てメール:', adminMail);
      log('自動返信メール:', autoReplyMail);

      await Promise.all([
        transporter.sendMail(adminMail),
        transporter.sendMail(autoReplyMail)
      ]);
      
      log('メール送信成功');
    } catch (error) {
      log('メール送信エラー:', error);
      throw error;
    }

    log('=== メール送信処理完了 ===');
    return NextResponse.json({ message: 'お問い合わせを受け付けました' });
  } catch (error) {
    log('エラー発生:', error);
    if (error instanceof Error) {
      log('エラー詳細:', {
        message: error.message,
        stack: error.stack,
      });
    }
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    );
  }
} 