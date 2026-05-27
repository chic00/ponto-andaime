import { ArrowLeft, Shield, Cookie, Eye, Lock, Server, MessageCircle, FileText } from "lucide-react";
import { useEffect } from "react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3 text-sm md:text-base">
      {children}
    </div>
  </section>
);

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          <a href="/" className="font-display text-2xl md:text-3xl tracking-wide text-foreground">
            PONTO DO <span className="text-primary">ANDAIME</span>
          </a>
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} /> Voltar ao site
          </a>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield size={16} /> LGPD & Proteção de Dados
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Política de <span className="text-primary">Privacidade</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sua privacidade é importante para nós. Conheça como coletamos, utilizamos e protegemos suas informações.
          </p>
        </div>

        {/* Intro */}
        <Section title="1. Introdução">
          <p>
            A Ponto do Andaime, inscrita no CNPJ 21.101.312/0001-61, com sede em Cuiabá/MT, valoriza a privacidade dos usuários de seu site. Esta Política de Privacidade foi elaborada em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD) e tem como objetivo informar de maneira clara e transparente como tratamos os dados pessoais coletados por meio do nosso site institucional.
          </p>
          <p>
            Ao acessar e utilizar nosso site, você concorda com as práticas descritas nesta política. Caso não concorde, recomendamos que não continue navegando em nossas páginas.
          </p>
        </Section>

        {/* Dados Coletados */}
        <Section title="2. Dados que Coletamos">
          <p>Podemos coletar as seguintes categorias de dados pessoais:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Dados de identificação:</strong> nome completo, telefone, e-mail e empresa (quando fornecidos voluntariamente via WhatsApp ou formulários).</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e geolocalização aproximada (coletados automaticamente via cookies e ferramentas analíticas).</li>
            <li><strong>Dados de interação:</strong> mensagens enviadas via WhatsApp, solicitações de orçamento e histórico de comunicação.</li>
          </ul>
        </Section>

        {/* Finalidade */}
        <Section title="3. Finalidade do Tratamento">
          <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Responder solicitações de orçamento e dúvidas sobre nossos serviços de locação de andaimes e escoras.</li>
            <li>Entrar em contato via WhatsApp ou telefone para acompanhamento comercial.</li>
            <li>Melhorar a experiência de navegação em nosso site.</li>
            <li>Gerar análises estatísticas anônimas de tráfego e comportamento dos usuários.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </Section>

        {/* Cookies */}
        <Section title="4. Uso de Cookies">
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6 mb-6">
            <Cookie className="text-primary shrink-0 mt-1" size={28} />
            <div>
              <h3 className="font-semibold text-foreground mb-2">O que são cookies?</h3>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles nos ajudam a lembrar suas preferências e entender como você interage com nosso conteúdo.
              </p>
            </div>
          </div>

          <p>Nosso site utiliza os seguintes tipos de cookies:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site (ex: segurança, carregamento de páginas).</li>
            <li><strong>Cookies de desempenho e análise:</strong> utilizados pelo Google Analytics para entender como os visitantes interagem com o site (anônimos e agregados).</li>
            <li><strong>Cookies de funcionalidade:</strong> permitem lembrar suas preferências de navegação.</li>
            <li><strong>Cookies de marketing:</strong> utilizados para medir a eficácia de campanhas publicitárias (quando aplicável).</li>
          </ul>
          <p className="mt-3">
            Você pode gerenciar suas preferências de cookies diretamente no seu navegador. A maioria dos navegadores permite bloquear ou excluir cookies nas configurações de privacidade. Note que a desativação de cookies essenciais pode comprometer a funcionalidade do site.
          </p>
        </Section>

        {/* Compartilhamento */}
        <Section title="5. Compartilhamento de Dados">
          <p>
            A Ponto do Andaime <strong>não vende, aluga ou comercializa</strong> seus dados pessoais a terceiros. Podemos compartilhar informações apenas nas seguintes hipóteses:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Prestadores de serviço:</strong> empresas que nos auxiliam em hospedagem de site, análise de dados (Google Analytics) e suporte técnico, sempre sob contrato de confidencialidade.</li>
            <li><strong>Obrigação legal:</strong> quando exigido por lei, ordem judicial ou autoridade regulatória competente.</li>
            <li><strong>Proteção de direitos:</strong> quando necessário para proteger nossos direitos, segurança ou propriedade.</li>
          </ul>
        </Section>

        {/* Segurança */}
        <Section title="6. Segurança da Informação">
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6 mb-6">
            <Lock className="text-primary shrink-0 mt-1" size={28} />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como protegemos seus dados</h3>
              <p>
                Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração. Utilizamos conexão segura (HTTPS) e nossos fornecedores de tecnologia são avaliados quanto às práticas de segurança da informação.
              </p>
            </div>
          </div>
          <p>
            Apesar dos nossos esforços, nenhum sistema é completamente inviolável. Em caso de incidente de segurança que comprometa seus dados, comprometemo-nos a notificar você e a autoridade competente conforme exigido pela LGPD.
          </p>
        </Section>

        {/* Direitos do Titular */}
        <Section title="7. Seus Direitos (LGPD)">
          <p>De acordo com a Lei Geral de Proteção de Dados, você possui os seguintes direitos:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Confirmação e acesso:</strong> saber se seus dados estão sendo tratados e acessá-los.</li>
            <li><strong>Correção:</strong> solicitar a retificação de dados incompletos, inexatos ou desatualizados.</li>
            <li><strong>Exclusão:</strong> pedir a eliminação de dados desnecessários ou excessivos, ou quando o consentimento for revogado.</li>
            <li><strong>Portabilidade:</strong> solicitar a transferência de seus dados para outro responsável, quando tecnicamente viável.</li>
            <li><strong>Revogação do consentimento:</strong> retirar seu consentimento a qualquer momento, sem comprometer a licitude do tratamento anterior.</li>
            <li><strong>Oposição:</strong> discordar do tratamento realizado com base em outras hipóteses legais, em caso de descumprimento à lei.</li>
            <li><strong>Informação:</strong> saber com quais entidades públicas e privadas seus dados foram compartilhados.</li>
          </ul>
          <p className="mt-3">
            Para exercer seus direitos, entre em contato conosco pelos canais indicados na seção "Como Entrar em Contato".
          </p>
        </Section>

        {/* Retenção */}
        <Section title="8. Prazo de Retenção">
          <p>
            Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, ou para atender a obrigações legais, contratuais e regulatórias. Dados de navegação coletados por cookies analíticos são retidos pelo prazo definido pelas ferramentas utilizadas (ex: Google Analytics).
          </p>
        </Section>

        {/* Links Externos */}
        <Section title="9. Links para Sites de Terceiros">
          <p>
            Nosso site pode conter links para sites externos (como Instagram, WhatsApp e Google Maps). Esta política de privacidade não se aplica a esses sites. Recomendamos que você leia as políticas de privacidade de cada site de terceiro antes de fornecer qualquer dado pessoal.
          </p>
        </Section>

        {/* Alterações */}
        <Section title="10. Alterações nesta Política">
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas de tratamento de dados ou em legislação aplicável. Recomendamos que você a consulte regularmente. A data da última atualização será sempre indicada no final deste documento.
          </p>
        </Section>

        {/* Contato */}
        <Section title="11. Como Entrar em Contato">
          <p>
            Se tiver dúvidas, solicitações ou quiser exercer seus direitos como titular de dados pessoais, entre em contato conosco:
          </p>
          <div className="bg-card border border-border rounded-lg p-6 mt-4 space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MessageCircle size={20} className="text-primary" />
              <span>WhatsApp: <a href="https://wa.me/5565996411042" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(65) 99641-1042</a></span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <FileText size={20} className="text-primary" />
              <span>E-mail: contato@pontodoandaime.com.br</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Server size={20} className="text-primary" />
              <span>Endereço: Cuiabá/MT</span>
            </div>
          </div>
          <p className="mt-4">
            Responderemos às suas solicitações no prazo máximo de 15 (quinze) dias, conforme previsto na LGPD.
          </p>
        </Section>

        {/* Consentimento */}
        <Section title="12. Consentimento">
          <p>
            Ao continuar navegando em nosso site e utilizar nossos canais de comunicação, você declara estar ciente e de acordo com os termos desta Política de Privacidade e Cookies.
          </p>
        </Section>

        {/* Atualização */}
        <div className="border-t border-border pt-8 mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Última atualização: <strong>26 de maio de 2026</strong>
          </p>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-background border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <a href="/" className="font-display text-xl tracking-wide text-foreground mb-2 inline-block">
            PONTO DO <span className="text-primary">ANDAIME</span>
          </a>
          <p>© {new Date().getFullYear()} Ponto do Andaime — Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
