'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('フォーム送信開始:', formData);

    try {
      // APIエンドポイントのURLを確認
      const apiUrl = '/api/contact';
      console.log('APIエンドポイント:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('APIレスポンス:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('APIエラーレスポンス:', errorData);
        throw new Error(errorData.error || 'メールの送信に失敗しました');
      }

      const data = await response.json();
      console.log('APIレスポンスデータ:', data);

      toast.success('お問い合わせありがとうございます。');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('エラー発生:', error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('エラーが発生しました。もう一度お試しください。');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          お名前 <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="山田 太郎"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1">
          会社名
        </label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="株式会社〇〇"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="example@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          電話番号
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="090-1234-5678"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1">
          ご相談内容
        </label>
        <Select value={formData.service} onValueChange={handleServiceChange}>
          <SelectTrigger>
            <SelectValue placeholder="選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="truck_sales">トラック販売</SelectItem>
            <SelectItem value="truck_rental">トラックレンタル</SelectItem>
            <SelectItem value="maintenance">メンテナンス</SelectItem>
            <SelectItem value="other">その他</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          メッセージ <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="お問い合わせ内容をご記入ください"
          className="min-h-[150px]"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? '送信中...' : '送信する'}
      </Button>
    </form>
  );
} 