"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container py-12">
      <Link href="/" className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800">
        <ArrowLeft className="mr-2 h-4 w-4" />
        トップページに戻る
      </Link>

      <h1 className="mb-8 text-3xl font-bold">プライバシーポリシー</h1>

      <div className="prose max-w-none">
        <p className="mb-4">TruckBase（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づき、適切な取り扱いと保護に努めます。</p>

        <h2 className="mt-8 text-2xl font-bold">1. 個人情報の定義</h2>
        <p className="mb-4">当社は、個人情報を以下のように定義します。</p>
        <ul className="mb-4 list-disc pl-6">
          <li>氏名、住所、電話番号、メールアドレス等の個人を特定できる情報</li>
          <li>お問い合わせ内容やご相談内容</li>
          <li>サービス利用履歴や閲覧履歴</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">2. 個人情報の収集と利用目的</h2>
        <p className="mb-4">当社は、以下の目的で個人情報を収集・利用します。</p>
        <ul className="mb-4 list-disc pl-6">
          <li>サービスの提供・改善のため</li>
          <li>お問い合わせへの対応のため</li>
          <li>新サービス・キャンペーン等のご案内のため</li>
          <li>統計データの作成のため</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">3. 個人情報の管理</h2>
        <p className="mb-4">当社は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。</p>

        <h2 className="mt-8 text-2xl font-bold">4. 個人情報の第三者提供</h2>
        <p className="mb-4">当社は、以下の場合を除き、個人情報を第三者に提供しません。</p>
        <ul className="mb-4 list-disc pl-6">
          <li>お客様の同意がある場合</li>
          <li>法令に基づく場合</li>
          <li>人の生命、身体又は財産の保護のために必要がある場合</li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold">5. 個人情報の開示・訂正・利用停止</h2>
        <p className="mb-4">お客様は、ご自身の個人情報について、開示・訂正・利用停止を請求することができます。</p>

        <h2 className="mt-8 text-2xl font-bold">6. お問い合わせ</h2>
        <p className="mb-4">本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。</p>
        <p className="mb-4">
          メールアドレス：privacy@truckbase.jp<br />
          電話番号：03-1234-5678
        </p>

        <p className="mt-8 text-sm text-gray-600">制定日：2024年4月1日</p>
      </div>
    </div>
  )
} 