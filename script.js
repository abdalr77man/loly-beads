// ✏️ عدّلي بياناتك هنا
const CONFIG = {
  instagram: "loly_beadss",       // اسم الحساب على إنستجرام

  // ✏️ بياناتك أنتِ في الكريديت اللي في آخر الموقع
  designerName: "Abdalrhman Hfnawey",
  portfolioUrl: "https://abdalr77man.github.io/"
};

const dmUrl = `https://ig.me/m/${CONFIG.instagram}`;   // يفتح رسائل الإنستجرام مباشرة
document.getElementById('dm-link').href = dmUrl;
document.getElementById('ig-link').href = `https://instagram.com/${CONFIG.instagram}`;
document.getElementById('year').textContent = new Date().getFullYear();

// زر "اطلبيها": ينسخ رسالة جاهزة باسم المنتج ويفتح رسائل الإنستجرام
const toast = document.getElementById('toast');
function showToast(t){ toast.textContent = t; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'), 4000); }
document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const msg = `أهلاً لولي بيدز، عايزة أطلب: ${btn.dataset.name}`;
    try { await navigator.clipboard.writeText(msg); showToast('تم نسخ اسم المنتج — الصقيه في الرسالة 🤍'); } catch(e){}
    window.open(dmUrl, '_blank', 'noopener');
  });
});

// فلتر المنتجات
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const f = chip.dataset.filter;
  document.querySelectorAll('.card').forEach(card => {
    card.classList.toggle('hide', f !== 'all' && card.dataset.cat !== f);
  });
}));

// قائمة الموبايل
const menuBtn = document.querySelector('.menu-btn');
const links = document.getElementById('links');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// الكريديت
document.getElementById('designer-link').textContent = CONFIG.designerName;
document.getElementById('designer-link').href = CONFIG.portfolioUrl;
document.getElementById('hire-link').href = CONFIG.portfolioUrl;
