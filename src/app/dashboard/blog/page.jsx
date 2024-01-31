import styles from '/src/app/ui/dashboard/blog/blog.module.css';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.card}>
        <div className={styles.tagContainer}>
          <input type="text" placeholder="Tag" name="tag" maxLength={10} className={styles.tag} required />
          <input type="text" placeholder="Tag" name="tag" maxLength={10} className={styles.tag} />
        </div>
        <input type="text" placeholder="Title" name="title" className={styles.title} maxLength={20} required />
        <textarea placeholder="Description" name="desc" id="desc" rows="10" className={styles.description} maxLength={100} required />
        <textarea placeholder="Details" name="details" className={styles.details} maxLength={1000} required />
        <div className={styles.button}>
          <button className={styles.save}>Save</button>
          <div className={styles.image}>
            <label>
              Choose File
              <input type="file" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogPage;
