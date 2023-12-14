function copyText(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      alert('Текст скопирован в буфер обмена');
    } catch (err) {
      alert('Не удалось скопировать текст: ', err);
    }

    document.body.removeChild(textArea);
  }